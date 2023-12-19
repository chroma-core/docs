---
sidebar_position: 9
title: "☁️ Deployment"
---

:::caution Alpha Status
Chroma Server is currently in Alpha. We are working hard to move Chroma from an in-memory single-process oriented
library to a distributed production-grade DB!

- [x] Alpha <- Currently
- [ ] Technical Preview - ~1 month away, powered by a completely new backend
- [ ] Full production
- [ ] GA - General Availability

:::

# ☁️ Deployment

You can also deploy Chroma on a long-running server, and connect to it
remotely.

There are many possible configurations, but for convenience we have
provided a very simple AWS CloudFormation template to experiment with
deploying Chroma to EC2 on AWS.

## Hosted Chroma

We want to offer hosted Chroma, and we need your help.

Fill out the survey to jump the wait-list. Coming Q3 2023.

[📝 30 second survey](https://airtable.com/shrOAiDUtS2ILy5vZ)

## Docker

You can run a Chroma server in a Docker container.

You can get the Chroma Docker image from [Docker Hub](https://hub.docker.com/r/chromadb/chroma), or from
the [Chroma GitHub Container Registry](https://github.com/chroma-core/chroma/pkgs/container/chroma)

```sh
docker pull chromadb/chroma
docker run -p 8000:8000 chromadb/chroma
```

You can also build the Docker image yourself from the Dockerfile in
the [Chroma GitHub repository](https://github.com/chroma-core/chroma)

```sh
git clone git@github.com:chroma-core/chroma.git
cd chroma
docker-compose up -d --build
```

The Chroma client can then be configured to connect to the server running in the Docker container.

```python
import chromadb

chroma_client = chromadb.HttpClient(host='localhost', port=8000)
```

### Authentication with Docker

By default, the Docker image will run with no authentication. Follow the [Authentication](./usage-guide#authentication)
section of the Usage Guide to configure authentication in the Docker container.

You can also create a `.chroma_env` file setting the required environment variables and pass it to the Docker container
with the `--env-file` flag when running the container.

```sh
docker run --env-file ./.chroma_env -p 8000:8000 chromadb/chroma
```

## Cloud Deployments

Below are instructions for deploying Chroma with Terraform on the following public cloud providers:

- [AWS](#aws)
- [Google Cloud Platform](#gcp-google-cloud-platform)
- [Digital Ocean](#digital-ocean)

### Prerequisites

- [Terraform CLI v1.3.4+](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started/install-cli)

Generate a key:

```bash
ssh-keygen -t RSA -b 4096 -C "Chroma SSH Keypair" -N "" -f ./chroma_id_rsa && \
chmod 400 ./chroma_id_rsa
```

The key pair will allow you to connect to your Chroma instance via SSH (applicable only for AWS, GCP and DO
deployments). In addition, the keypair is used for post provisioning steps such as formatting the Chroma data volume (
applicable only for AWS deployments).

### AWS

AWS Configuration variables

| Parameter Name                             | Description                                                                                                         | Default Value       |
|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------|
| chroma_release                             | The chroma release to deploy                                                                                        | 0.4.20              |
| region                                     | AWS Region                                                                                                          | us-west-1           |
| instance_type                              | AWS EC2 Instance Type                                                                                               | t3.medium           |
| public_access                              | Enable public ingress on port 8000                                                                                  | true                |
| enable_auth                                | Enable authentication                                                                                               | true                |
| auth_type                                  | Authentication type                                                                                                 | token               |
| import_keypair                             | Whether to import the keypair in AWS. Set this to `false` if your keypair is already available in AWS.              | true                |
| keypair_name                               | The name of the keypair to import                                                                                   | chroma_keypair      |
| ssh_public_key                             | SSH Public Key                                                                                                      | ./chroma_id_rsa.pub |
| ssh_private_key                            | SSH Private Key                                                                                                     | ./chroma_id_rsa     |
| chroma_instance_volume_size                | The size of the instance volume - the root volume                                                                   | 30                  |
| chroma_data_volume_size                    | EBS Volume Size of the attached data volume where your chroma data is stored                                        | 20                  |
| chroma_data_volume_snapshot_before_destroy | Take a snapshot of the chroma data volume before destroying it                                                      | false               |
| chroma_data_restore_from_snapshot_id       | Restore the chroma data volume from a snapshot                                                                      | null                |
| chroma_port                                | The port that chroma listens on                                                                                     | 8000                |
| source_ranges                              | List of CIDR ranges to allow through the firewall                                                                   | ["0.0.0.0/0"]       |
| mgmt_source_ranges                         | List of CIDR ranges to allow for management of the Chroma instance. This is used for SSH incoming traffic filtering | ["0.0.0.0/0"]       |

> Note: All of the above variables can be exported via environment variables (`TF_<variable_name>=<var_value>`) or set
> in a `.tfvars` file.

Set up your Terraform variables and deploy your instance:

```bash
export TF_VAR_AWS_ACCESS_KEY=<AWS_ACCESS_KEY>
export TF_VAR_AWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY>
export TF_ssh_public_key="./chroma_id_rsa.pub"
export TF_ssh_private_key="./chroma_id_rsa"
export TF_VAR_chroma_release=0.4.20
export TF_VAR_region="us-west-1"
export TF_VAR_public_access="true"
export TF_VAR_enable_auth="true"
export TF_VAR_auth_type="token"
export TF_VAR_chroma_data_volume_snapshot_before_destroy="true"
terraform apply -auto-approve
```

Verify that your instance is up and running:

```bash
export instance_public_ip=$(terraform output instance_public_ip | sed 's/"//g')
curl -v http://$instance_public_ip:8000/api/v1/heartbeat
```

> Note: Depending on your OS the `sed` command might not work. In that case, you can manually copy the public IP from
> the Terraform output.

To get the auth token generated during the setup:

```bash
terraform output chroma_auth_token
```

For more details check
our [Terraform AWS deployment blueprint](https://github.com/chroma-core/chroma/tree/main/examples/deployments/aws-terraform)

### GCP (Google Cloud Platform)

You will need to install [gcloud CLI](https://cloud.google.com/sdk/gcloud) and authenticate with your GCP account:

```bash
gcloud auth application-default login
```

GCP Configuration parameters:

| Parameter Name                    | Description                                                                            | Default Value          |
|-----------------------------------|----------------------------------------------------------------------------------------|------------------------|
| project_id                        | The project id to deploy to                                                            | N/A                    |
| chroma_release                    | The chroma release to deploy                                                           | 0.4.20                 |
| zone                              | N/A                                                                                    | us-central1-a          |
| image                             | The image to use for the instance                                                      | debian-cloud/debian-11 |
| vm_user                           | The user to use for connecting to the instance. This is usually the default image user | debian                 |
| machine_type                      | N/A                                                                                    | e2-small               |
| public_access                     | Enable public ingress on port 8000                                                     | true                   |
| enable_auth                       | Enable authentication                                                                  | true                   |
| auth_type                         | Authentication type                                                                    | token                  |
| ssh_public_key                    | SSH Public Key                                                                         | ./chroma_id_rsa.pub    |
| ssh_private_key                   | SSH Private Key                                                                        | ./chroma_id_rsa        |
| chroma_instance_volume_size       | The size of the instance volume - the root volume                                      | 30                     |
| chroma_data_volume_size           | Volume Size of the attached data volume where your chroma data is stored               | 20                     |
| chroma_data_volume_device_name    | The device name of the chroma data volume                                              | chroma-disk-0          |
| prevent_chroma_data_volume_delete | Prevent the chroma data volume from being deleted when the instance is terminated      | false                  |
| disk_type                         | The type of disk to use for the instance. Can be either pd-standard or pd-ssd          | pd-ssd                 |
| labels                            | Labels to apply to all resources in this example                                       | {environment: 'dev'}   |
| chroma_port                       | The port that chroma listens on                                                        | 8000                   |
| source_ranges                     | List of CIDR ranges to allow through the firewall                                      | ["0.0.0.0/0"]          |

> Note: All of the above variables can be exported via environment variables (`TF_<variable_name>=<var_value>`) or set
> in a `.tfvars` file.

Set up your Terraform variables and deploy your instance:

```bash
export TF_VAR_project_id=<your_project_id>
export TF_ssh_public_key="./chroma_id_rsa.pub"
export TF_ssh_private_key="./chroma_id_rsa"
export TF_VAR_chroma_release="0.4.20"
export TF_VAR_zone="us-central1-a"
export TF_VAR_public_access="true"
export TF_VAR_enable_auth="true"
export TF_VAR_auth_type="token"
terraform apply -auto-approve
```

Verify that your instance is up and running:

```bash
export instance_public_ip=$(terraform output instance_public_ip | sed 's/"//g')
curl -v http://$instance_public_ip:8000/api/v1/heartbeat
```

> Note: Depending on your OS the `sed` command might not work. In that case, you can manually copy the public IP from
> the Terraform output.

To get the auth token generated during the setup:

```bash
terraform output chroma_auth_token
```

For more details check
our [Terraform GCP deployment blueprint](https://github.com/chroma-core/chroma/tree/main/examples/deployments/google-cloud-compute)

### Digital Ocean

Digital Ocean Configuration parameters:

| Parameter Name          | Description                                                                                                         | Default Value         |
|-------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------|
| instance_image          | The image to use for the instance                                                                                   | ubuntu-22-04-x64      |
| chroma_release          | The chroma release to deploy                                                                                        | 0.4.20                |
| region                  | DO Region                                                                                                           | nyc2                  |
| instance_type           | Droplet size                                                                                                        | s-2vcpu-4gb           |
| public_access           | Enable public ingress on port 8000                                                                                  | true                  |
| enable_auth             | Enable authentication                                                                                               | true                  |
| auth_type               | Authentication type                                                                                                 | token                 |
| ssh_public_key          | SSH Public Key                                                                                                      | ./chroma-do.pub       |
| ssh_private_key         | SSH Private Key                                                                                                     | ./chroma-do           |
| chroma_data_volume_size | EBS Volume Size of the attached data volume where your chroma data is stored                                        | 20                    |
| chroma_port             | The port that chroma listens on                                                                                     | 8000                  |
| source_ranges           | List of CIDR ranges to allow through the firewall                                                                   | ["0.0.0.0/0", "::/0"] |
| mgmt_source_ranges      | List of CIDR ranges to allow for management of the Chroma instance. This is used for SSH incoming traffic filtering | ["0.0.0.0/0", "::/0"] |

> Note: All of the above variables can be exported via environment variables (`TF_<variable_name>=<var_value>`) or set
> in a `.tfvars` file.

Set up your Terraform variables and deploy your instance:

```bash
export TF_VAR_do_token=<DIGITALOCEAN_TOKEN>
export TF_ssh_public_key="./chroma_id_rsa.pub"
export TF_ssh_private_key="./chroma_id_rsa"
export TF_VAR_chroma_release="0.4.20"
export TF_VAR_region="ams2"
export TF_VAR_public_access="true"
export TF_VAR_enable_auth="true"
export TF_VAR_auth_type="token"
terraform apply -auto-approve
```

Verify that your instance is up and running:

```bash
export instance_public_ip=$(terraform output instance_public_ip | sed 's/"//g')
curl -v http://$instance_public_ip:8000/api/v1/heartbeat
```

> Note: Depending on your OS the `sed` command might not work. In that case, you can manually copy the public IP from
> the Terraform output.

To get the auth token generated during the setup:

```bash
terraform output chroma_auth_token
```

For more details check
our [Terraform Digital Ocean deployment blueprint](https://github.com/chroma-core/chroma/tree/main/examples/deployments/do-terraform)

### Need help or have questions?

Reach out to us on [Discord](https://discord.gg/MMeYNTmh3x)