---
sidebar_position: 5
title: "📖 API Reference"
---

# 📖 API Reference

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs groupId="lang" queryString="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

***


<Tabs groupId="lang" className="hideTabSwitcher">
<TabItem value="js" label="JavaScript">

### Run the backend

Run `docker-compose up -d --build` to run a production backend in Docker on your local computer. Simply update your API initialization and then use the API the same way as before.

## Initialize client - JS

```javascript
import { ChromaClient } from 'chromadb'
const chroma_client = new ChromaClient();
```

## Methods on Client

### Methods related to Collections

:::note Collection naming
Collections are similar to AWS s3 buckets in their naming requirements because they are used in URLs in the REST API. Here's the [full list](/api-guide#creating-inspecting-and-deleting-collections).
:::

```javascript
// list all collections
await client.listCollections()

// make a new collection
const collection = await client.createCollection("testname")

// get an existing collection
const collection = await client.getCollection("testname")

// delete a collection
await client.deleteCollection("testname")
```

### Utility methods

```javascript
// resets entire database - this *cant* be undone!
await client.reset()
```

## Methods on Collection

```javascript
// get the number of items in a collection
await collection.count()

// add new items to a collection
// either one at a time
await collection.add(
    "id1",
    [1.5, 2.9, 3.4],
    {"source": "my_source"},
    "This is a document",
) 
// or many, up to 100k+!
await collection.add(
    ["uri9", "uri10"],
    [[1.5, 2.9, 3.4], [9.8, 2.3, 2.9]],
    [{"style": "style1"}, {"style": "style2"}],
    ["This is a document", 'that is a document']
)
// including just documents
await collection.add(
    ["uri9", "uri10"], 
    undefined,
    [{"style": "style1"}, {"style": "style2"}],
    ["doc1000101", "doc288822"],
)

// get items from a collection
await collection.get()

// convenience, get first 5 items from a collection
await collection.peek()

// do nearest neighbor search to find similar embeddings or documents, supports filtering
await collection.query(
    query_embeddings=[[1.1, 2.3, 3.2], [5.1, 4.3, 2.2]],
    n_results=2,
    where={"style": "style2"}
)

// delete items
await collection.delete()

```


</TabItem>
<TabItem value="py" label="Python">

## Initialize client - Python

### In-memory chroma

```python
import chromadb
client = chromadb.Client()
```

### In-memory chroma with saving/loading to disk

In this mode, Chroma will persist data between sessions. On load - it will load up the data in the directory you specify. And on exit - it will save to that directory.

```python
import chromadb
from chromadb.config import Settings
client = chromadb.Client(Settings(chroma_db_impl="duckdb+parquet",
                                    persist_directory="/path/to/persist/directory"
                                ))
```

### Run chroma just as a client to talk to a backend service

For production use cases, an in-memory database will not cut it. Run `docker-compose up -d --build` to run a production backend in Docker on your local computer. Simply update your API initialization and then use the API the same way as before.

```python
import chromadb
from chromadb.config import Settings
chroma_client = chroma.Client(Settings(chroma_api_impl="rest",
                                        chroma_server_host="localhost",
                                        chroma_server_http_port="8000"
                                    ))
```

## Methods on Client

### Methods related to Collections

:::note Collection naming
Collections are similar to AWS s3 buckets in their naming requirements because they are used in URLs in the REST API. Here's the [full list](/api-guide#creating-inspecting-and-deleting-collections).
:::

```python
# list all collections
client.list_collections()

# make a new collection
collection = client.create_collection("testname")

# get an existing collection
collection = client.get_collection("testname")

# delete a collection
client.delete_collection("testname")
```

### Utility methods

```python
# resets entire database - this *cant* be undone!
client.reset()

# returns timestamp to check if service is up
client.heartbeat()
```

## Methods on Collection

```python
# change the name or metadata on a collection
collection.modify(name="testname2")

# get the number of items in a collection
collection.count()

# add new items to a collection
# either one at a time
collection.add(
    embeddings=[1.5, 2.9, 3.4],
    metadatas={"uri": "img9.png", "style": "style1"},
    documents="doc1000101",
    ids="uri9",
)
# or many, up to 100k+!
collection.add(
    embeddings=[[1.5, 2.9, 3.4], [9.8, 2.3, 2.9]],
    metadatas=[{"style": "style1"}, {"style": "style2"}],
    ids=["uri9", "uri10"],
)
collection.add(
    documents=["doc1000101", "doc288822"],
    metadatas=[{"style": "style1"}, {"style": "style2"}],
    ids=["uri9", "uri10"],
)

# update items in a collection
collection.update()

# get items from a collection
collection.get()

# convenience, get first 5 items from a collection
collection.peek()

# do nearest neighbor search to find similar embeddings or documents, supports filtering
collection.query(
    query_embeddings=[[1.1, 2.3, 3.2], [5.1, 4.3, 2.2]],
    n_results=2,
    where={"style": "style2"}
)

# delete items
collection.delete()

# advanced: manually create the embedding search index
collection.create_index()
```

</TabItem>
</Tabs>

