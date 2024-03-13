---
slug: /deployment/gcp
title: Google Cloud Platform
---

# Google Cloud Platform (GCP)


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