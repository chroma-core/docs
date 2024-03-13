---
slug: /deployment/aws
title: Amazon Web Services
---

# Amazon Web Services (AWS)


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
