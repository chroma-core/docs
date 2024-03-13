---
slug: /deployment
title: "☁️ Deployment"
hide_title: true
---

:::caution Alpha Status
Chroma Server is currently in Alpha. We are working hard to move Chroma from an in-memory single-process oriented library to a distributed production-grade DB!

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

### Providers

Below are instructions for deploying Chroma with Terraform on the following public cloud providers:

- [AWS](/deployment/aws)
- [Google Cloud Platform](/deployment/gcp)
- [Digital Ocean](/deployment/digital-ocean)


### Need help or have questions?

Reach out to us on [Discord](https://discord.gg/MMeYNTmh3x)