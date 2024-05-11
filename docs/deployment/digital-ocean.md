---
slug: /deployment/digital-ocean
title: Digital Ocean
---

# Digital Ocean (DO)


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