---
sidebar_label: 💻 CLI
title:   CLI
sidebar_position: 10
---

# Chroma Command Line Interface (CLI)

The Chroma CLI is a command line interface for interacting with Chroma.

The CLI comes with Chroma core package and is available in your virtual environment after installing Chroma (`pip install chromadb`).

## Usage

Available CLI commands are:

- `run` - Run Chroma DB server locally

### Run


- `--path` - Path to the Chroma DB directory. If not provided, the current working directory is used.
- `--host` - Host to run the server on. Default: `localhost`
- `--port` - Port to run the server on. Default: `8000`
- `--log-path` - Path to the log file. Default: `chroma.log`


Example:

```bash
chroma run --path /chroma-data --host 0.0.0.0 --port 8000 --log-path chroma.log
```

### Help


```bash
chroma --help
```
