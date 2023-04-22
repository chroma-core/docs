---
sidebar_position: 5
title: "📖 API Reference"
---

# 📖 API Reference

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

***


<Tabs queryString groupId="lang" className="hideTabSwitcher">
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

# get a collection or create if it doesn't exist already
collection = client.get_or_create_collection("testname")

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
<TabItem value="js" label="JavaScript">



<br/>
<br/>
<br/>
<br/>




## client()

<br/>

#### Description

Create a client for communicating with the server.

<br/>

#### Parameters

- basePath `1st Parameter` `string or undefined`  
Give the client the server URL.  
Default : http://localhost:8000.

<br/>

#### Example Code

```javascript
import { ChromaClient } from 'chromadb'

const client = new ChromaClient('http://1.2.3.4:8000')
```

<br/>

#### Returns

A client object.





<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>




## client.createCollection()

<br/>

#### Description

Create a collection in the database.

<br/>

#### Parameters

- name `1st Parameter` `string`  
Give the collection a name.  

- metadata `2nd Parameter` `object`   
Optional - Give the collection some metadata.

- embeddingFunction `3rd parameter` `CallableFunction`  
Optional - Give the collection an embedding function.

<br/>


#### Example Code

```javascript
const collection = await client.createCollection("collection")
```

<br/>

#### Returns

A promise for a collection object.

<br/>

#### Example Response

````javascript
Collection {
  name: "collection",
  api: apiInstance,
  metadata: {
    creator: "John Doe"
  },
  embeddingFunction: embeddingFunction
}
````




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>





## client.getOrCreateCollection()

<br/>

#### Description

Get a collection from the database. If missing, create it.

<br/>

#### Parameters

- name `1st Parameter` `string`  
Get a collection of this name. If missing, create it with this name

- metadata `2nd Parameter` `object`  
Optional - Get a collection. If missing, create it with this metadata.

- embeddingFunction `3rd parameter` `CallableFunction`  
Optional - Give the collection an embedding function.

<br/>

#### Example Code

```javascript
const collection = await client.getOrCreateCollection("collection")
```

<br/>

#### Returns

A Promise for a collection object.

<br/>

#### Example Response

````javascript
Collection {
  name: "collection",
  api: apiInstance,
  metadata: {
    creator: "John Doe"
  },
  embeddingFunction: embeddingFunctionInstance
}
````




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>





## client.getCollection()

<br/>

#### Description

Get a collection from the database.

<br/>

#### Parameters

- name `1st Parameter` `string`  
Get a collection of this name.

- embeddingFunction `2nd parameter` `CallableFunction`  
Optional - Give the collection an embedding function.

<br/>

#### Example Code

```javascript
const collection = await client.getCollection("collection")
```

<br/>

#### Returns

A Promise for a collection object.

<br/>

#### Example Response

````javascript
Collection {
  name: "collection",
  api: apiInstance,
  metadata: {
    creator: "John Doe"
  },
  embeddingFunction: embeddingFunctionInstance
}
````




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>






## client.deleteCollection()

<br/>

#### Description

Delete a collection from the database.

<br/>

#### Parameters

- name `1st Parameter` `string`   
Delete a collection of this name.

<br/>

#### Example Code
```javascript
await client.deleteCollection("collection")
```

<br/>

#### Returns

A promise.






<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>






## client.listCollections()

<br/>

#### Description

Get a snapshot of collections in the database.

<br/>

#### Parameters

- none

<br/>

#### Example Code

```javascript
const collections = await client.listCollections()
```

<br/>

#### Example Returns

Returns a Promise for an array.

<br/>

#### Response

````javascript
[
  { name: 'collection', metadata: {"creator" : "John Doe"} },
  { name: 'collection2', metadata: {"creator" : "Sally Doe"} }
]
````





<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>





## client.version()

<br/>

#### Description

Get the version of the client.

<br/>

#### Parameters

- none

<br/>

#### Code

```javascript
const version = await client.version()
```

<br/>

#### Returns

Returns a Promise for a string.

<br/>

#### Response
````javascript
0.3.21
````





<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>





## client.reset()

<br/>

#### Description

Delete all the collections in the database.

<br/>

#### Parameters

- none

<br/>

#### Code

```javascript
await client.reset()
```

<br/>

#### Returns

A promise.





<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>







## collection.add()

<br/>

#### Description

Add items to a collection.

<br/>

#### Parameters

- ids `1st Parameter` `string[]`  
Give the items ids.

- embeddings `2nd Parameter` `number[][]`  
Optional - Give the items embeddings.

- metadatas `3rd Parameter` `object[]`  
Optional - Give the items metadatas.

- documents `4th Parameter` `string[]`  
Optional - Give the items documents.

<br/>

#### Example Code

```javascript
await collection.add(
    ["item1", "item2"],
    [[1.1, 2.2, 3.3], [2.2, 3.3, 4.4]],
    [{category:"A"}, {category:"B"}],
    undefined,
)
```

<br/>

#### Returns

A promise.

<br/>

#### Uses

1. Add an item with embeddings:  
Provide the ids and embeddings parameters.

2. Add an item with embeddings and metadatas:  
Provide the ids, embeddings, and metadatas parameters.

3. Add an item with documents:  
Provide the ids and documents parameters.

4. Add an item with documents and metadatas:  
Provide the ids, metadatas, and documents parameters.

5. Add an item with embeddings, metadatas, and documents:  
Provide the ids, embeddings, metadatas, and documents parameters.

Note: If the item is missing embeddings, the item will get embeddings from the collection's embedding function.

<br/>

#### Errors

1. "embeddings and documents cannot both be undefined"

2. "embeddingFunction is undefined. Please configure an embedding function"

3. "ids, embeddings, metadatas, and documents must all be the same length"





<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>





## collection.update()

<br/>

#### Description

Update items in a collection.

<br/>

#### Parameters

- ids `1st Parameter` `string[]`  
Give the ids of items to update.

- embeddings `2nd Parameter` `number[][]`  
Optional - Give the updated embeddings.

- metadatas `3rd Parameter` `object[]`  
Optional - Give the updated metadatas.

- documents `4th Parameter` `string[]d`  
Optional - Give the updated documents.

<br/>

#### Example Code

```javascript
await collection.update(
    ["item1", "item2"],
    [[2.2, 3.3, 4.4], [3.3, 4.4, 5.5]],
    [{"category":"AA"}, {"category":"BB"}],
    undefined,
)
```

<br/>

#### Returns

A promise.

<br/>

#### Uses

1. Update item embeddings:  
Provide the ids and embeddings parameters.

2. Update item metadata:  
Provide the ids and metadatas parameters.

3. Update item documents:  
Provide the ids and documents parameters.

4. Update item embeddings and metadata:  
Provide the ids, embeddings, and metadatas parameters.

5. Update item embeddings and documents:  
Provide the ids, embeddings, and documents parameters.

6. Update item metadata and documents:  
Provide the ids, metadatas, and documents parameters.

7. Update item embeddings, metadata, and documents:  
Provide the ids, embeddings, metadatas, and documents parameters.

Note: If the item is missing embeddings, the item will get embeddings from the collection's embedding function.

<br/>

#### Errors

1. "embeddings, documents, and metadatas cannot all be undefined":

2. "embeddingFunction is undefined. Please configure an embedding function":



<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>







## collection.delete()

<br/>

#### Description

Delete items in a collection.

<br/>

#### Parameters

- ids `1st Parameter` `[string]`  
Optional - Give the ids of item to delete.

- where `2nd parameter` `object`  
Optional - Give a filter object to delete items with a metadata.

- where_document `3rd parameter` `object`  
Optional - Give a filter object to delete items with a document content.

<br/>

#### Example Code

```javascript
await collection.delete(["item1", "item2"])
```

<br/>

#### Returns

A promise.

<br/>

#### Uses

1. Delete all items:  
Provide no parameters.

2. Delete all items with metadata:  
Provide where parameter.

3. Delete all items with metadata and document content:  
Provide where and where_document parameters.

4. Delete all items with document content:  
Provide where_document parameter.

5. Delete specific items:  
Provide ids parameter.

6. Delete specific items with metadata:  
Provide ids and where parameters.

7. Delete specific items with metadata and document content:  
Provide ids, where, and where_document parameters.

8. Delete specific items with document content:  
Provide ids and where_document parameters.




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>






## collection.get()

<br/>

#### Description

Get items from a collection.

<br/>

#### Parameters

- ids `1st Parameter` `string[]`  
Optional - Give the ids of items to get.

- where `2nd Parameter` `object`  
Optional - Give a filter object to get items with a metadata.

- limit `3rd Parameter` `number`  
Optional - Give the max items to get.

- offset `4th Parameter` `number`  
Optional - Give an offset to start to get items after.

- include `5th Parameter` `string[]`  
Optional - Give a enum array of item data to return. ["metadatas", "documents", "embeddings"].  Default: ["metadatas", "documents"]

- where_document `6th Parameter` `object`  
Optional - Give a filter object to get items with a document content.

<br/>

#### Example Code

```javascript
const results = await collection.get();
```

<br/>

#### Returns

A Promise for an object.


<br/>

#### Example Response
````javascript
{
  ids: [ "item1", "item2" ],
  embeddings: [ [1.1, 2.2, 3.3] [2.2, 3.3, 4.4]]
  documents: null,
  metadatas: [ { category: "A" }, { category: "B" } ]
}
````

<br/>




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>







## collection.query()

<br/>

#### Description

Query for items in a collection.

<br/>

#### Parameters

- query_embeddings `1st Parameter` `number[][]`  
Optional - Embeddings to query with.

- n_results `2nd Parameter` `number`  
Optional - Give the max items to return. Default: 10.

- where `3rd Parameter` `number`  
Optional - Give a filter object to query items with a metadata.

- query_text `4th Parameter` `string[]`  
Optional - Texts to query with.

- where_document `5th Parameter` `string[]`  
Optional - Give a filter object to query items with a document content.

- include `6th Parameter` `string[]`  
Optional - Give a enum array of item data to return. ["metadatas", "documents", "embeddings", "distances"].  Default: ["metadatas", "documents", "distances"]

<br/>

#### Example Code

```javascript
const results = await collection.query(
  undefined,
  10,
  undefined,
  ["document"],
  undefined,
  ["metadatas", "documents", "embeddings", "distances"]
)
```

<br/>

#### Returns

A Promise for an object.

<br/>

#### Example Response
````javascript
{
  ids: [ [ 'item1', 'item2', 'item3', 'item4', 'item5' ] ],
  embeddings: [ [ [Array], [Array], [Array], [Array], [Array] ] ],
  documents: [
    [
      'Document 1',
      'Document 2',
      'Document 3',
      'Document 4',
      'Document 5'
    ]
  ],
  metadatas: [ [ null, null, null, null, null ] ],
  distances: [
    [
      0.24549487233161926,
      0.24549487233161926,
      0.24553897976875305,
      0.24553897976875305,
      0.2527855336666107
    ]
  ]
}
````

<br/>

#### Uses

1. Query with texts:  
Provide query_text parameter with additional optional parameters.

2. Query with embeddings:  
Provide query_embeddings parameter with additional optional parameters.





<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>






## collection.count()

<br/>

#### Description

Get the number of items in a collection.

<br/>

#### Parameters

- none

<br/>

#### Example Code

```javascript
const count = await collection.count()
```

<br/>

#### Returns

A promise for an integer.

<br/>

#### Example Response
````javascript
10
````




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>





## collection.peek()

<br/>

#### Description

Get the first items in a collection.

<br/>

#### Parameters

- limit `1st Parameter` `number`  
Optional - Give the max items to return. Default: 10.

<br/>

#### Example Code

```javascript
const results = await collection.peek()
```

<br/>

#### Returns

A promise for an object.

<br/>

#### Example Response
````javascript
{
  ids: [
    'item1',
    'item2',
    'item3',
  ],
  embeddings: null,
  documents: [
    'Document 1',
    'Document 2',
    'Document 3',
  ],
  metadatas: [
    {category : 'A'}, { category : 'B' }, { category : 'C' }
  ]
}
````




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>




</TabItem>

</Tabs>

