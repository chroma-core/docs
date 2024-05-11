# MindsDB

MindsDB is the platform for customizing AI from enterprise data. MindsDB integrates with numerous data sources, including [Chroma](https://docs.mindsdb.com/integrations/vector-db-integrations/chromadb).

### Connect to Chroma using SQL


The required arguments to establish a connection are:

*    `host`: the host name or IP address of the Chroma instance.
*    `port`: the TCP/IP port of the Chroma instance.
*    `persist_directory`: [Optional] the directory to use for persisting data. This will create an in-memory ChromaDB instance.

To connect to a remote ChromaDB instance, the following CREATE DATABASE can be used:

```sql
CREATE DATABASE chromadb_datasource
WITH ENGINE = 'chromadb'
PARAMETERS = {
    "host": "YOUR_HOST",
    "port": YOUR_PORT
}
```

Alternateively, to connect to an in-memory ChromaDB instance, the following CREATE DATABASE can be used:

```sql
CREATE DATABASE chromadb_datasource
WITH ENGINE = "chromadb",
PARAMETERS = {
    "persist_directory": "YOUR_PERSIST_DIRECTORY"
}
```

For more informations and usage examples check [MindsDB Chroma docs](https://docs.mindsdb.com/integrations/vector-db-integrations/chromadb).