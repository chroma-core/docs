---
sidebar_position: 7
---

# ✈️ Migration

Schema and data format changes are a necessary evil of evolving software. We take changes seriously and make them infrequently and only when necessary.

Chroma's commitment is whenever schema or data format change, we will provide a seamless and easy-to-use migration tool to move to the new schema/format.

Specifically we will announce schema changes on:

- Discord ([#migrations channel](https://discord.com/channels/1073293645303795742/1129286514845691975))
- Github (here)
- Email listserv [Sign up](https://airtable.com/shrHaErIs1j9F97BE)

We will aim to provide:

- a description of the change and the rationale for the change.
- a CLI migration tool you can run
- a video walkthrough of using the tool

## Migration Log

### Migration from >0.4.0 to 0.4.0 - July 17, 2023

What's new in this version?
- New easy way to create clients
- Changed storage method

**New Clients**

```python
### in-memory ephemeral client

# before
import chromadb
client = chromadb.Client()

# after
import chromadb
client = chromadb.EphemeralClient()


### persistent client

# before
import chromadb
from chromadb.config import Settings
client = chromadb.Client(Settings(
    chroma_db_impl="duckdb+parquet",
    persist_directory="/path/to/persist/directory" # Optional, defaults to .chromadb/ in the current directory
))

# after
import chromadb
client = chromadb.PersistentClient(path="/path/to/persist/directory")


### http client (to talk to server backend)

# before
import chromadb
from chromadb.config import Settings
client = chromadb.Client(Settings(chroma_api_impl="rest",
                                        chroma_server_host="localhost",
                                        chroma_server_http_port="8000"
                                    ))

# after
import chromadb
client = chromadb.HttpClient(host="localhost", port="8000")

```

You can still also access the underlying `.Client()` method. If you want to turn off telemetry, all clients support custom settings:

```python
import chromadb
from chromadb.config import Settings
client = chromadb.PersistentClient(
    path="/path/to/persist/directory", 
    settings=Settings(anonymized_telemtry=False))
```

**New data layout**

This version of Chroma drops `duckdb` and `clickhouse` in favor of `sqlite` for metadata storage. This means migrating data over. We have created a migration CLI utility to do this. 

If you upgrade to `0.4.0` and try to access data stored in the old way, you will see this error message


> You are using a deprecated configuration of Chroma. Please pip install chroma-migrate and run `chroma-migrate` to upgrade your configuration. See https://docs.trychroma.com/migration for more information or join our discord at https://discord.gg/8g5FESbj for help!

Here is how to install and use the CLI:

```
pip install chroma-migrate
chroma-migrate
```

<img src="/img/chroma-migrate.png" />