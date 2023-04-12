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

<br/>

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
client = chroma.Client(Settings(chroma_api_impl="rest",
                                    chroma_server_host="localhost",
                                    chroma_server_http_port="8000"
                                ))
```


<br/>

****

<br/>

## Collections

Collections are grouping of items.

<br/>

****

<br/>

## Collection object

<br/>

#### Attributes
- name `string`  
Unique identifier of the object.
- metadata `dict`  
Set of key-value pairs that you can attach to the object.

<br/>

****

<br/>

## Create a collection

This method creates a collection object in the database.

<br/>

#### Method
```python
collection = client.create_collection(
    name="colors",
    metadata={"description":"embedding space for colors"}
    embedding_function=emb_fn),
)
```

<br/>

#### Parameters
- name `string` `required`  
Unique identifier of the object.
The string must:  
Have a length between 3 and 63 characters.  
Start and end with a lowercase letter or digit.  
Not contain consecutive dots.  
Not be a valid IP address.
- embedding_function `object` `optional`  
The [embedding function](./embeddings.md) to use to create embeddings for collection items.
Default: sentence transformer.
- metadata `dict` `optional`  
Set of key-value pairs containing additional information about the collection.

<br/>

#### Returns
Returns a collection object.

<br/>

****

<br/>

## Retrieve a collection

This method retrieves a collection object from the database.

<br/>

#### Method
```python
collection = client.get_collection(name="colors")
```

<br/>

#### Parameters
- name `string` `required`  
Unique identifier of the object.

<br/>

#### Returns
Returns a collection object.

<br/>

****

<br/>

## Retrieve all collections

This method retrieves all collection objects from the database.

<br/>

#### Method
```python
collections = client.list_collections()
```

<br/>

#### Parameters
- none

<br/>

#### Returns
Returns a list of collection objects.

<br/>

****

<br/>

## Delete a collection

This method deletes a collection object from the database.

<br/>

#### Method
```python
client.delete_collection(name="colors")
```

<br/>

#### Parameters
- name `string` `required`  
Unique identifier of the object.

<br/>

#### Returns
none

<br/>

****

<br/>

## Items

Collections utilize items to store data.

<br/>

****

<br/>

## Item object

<br/>

#### Attributes
- id `string`  
Unique identifier of the object.
- metadata `dict`  
Set of key-value pairs that you can attach to the object.
- document `string`  
Text value of the embedding.
- embedding `list[float]`  
Vector embedding of the document.


<br/>

****

<br/>

## Create an item

This method creates item objects in the collection object.

<br/>

#### Method
```python
collection = client.get_collection(name="colors")

collection.add(
    ids=["1", "2"],
    metadatas=[{fruit:"apple"}, {fruit:"banana"}],
    documents=["red", "yellow"],
    embeddings=[[1.1, 2.2, 3.3], [2.2, 3.3, 4.4]],
)
```

<br/>

#### Configuration

This method can be called with 2 parameter configurations:

1.
id `required`  
metadata `optional`   
document `required`  
embedding `optional`  

2. id `required`  
metadata `optional`  
document `optional`  
embedding `required`  

<br/>

#### Parameters

Items are represented by elements at the same index across lists. If the embedding parameter is missing, it will be generated from the document parameter using the collection's embedding function.

- ids `list[string]` `required`  
List of unique item identifiers.
- metadatas `list[dict]` `optional`  
List of metadata dictionaries for each item.
- documents `list[string]` `optional/required`  
List of item documents. Optional if embeddings are provided; otherwise, required.
- embeddings `list[list[float]]` `optional/required`  
List of item embeddings. Optional if documents are provided; otherwise, required.

<br/>

#### Returns
none

<br/>

****

<br/>

## Update an item

This method updates item objects in the collection object.

<br/>

#### Method
```python
collection = client.get_collection(name="colors")

collection.update(
    ids=["1", "2"],
    metadatas=[{fruit:"carrot"}, {fruit:"mango"}],
    documents=["light red", "dark yellow"],
    embeddings=[[1.2, 2.3, 3.4], [2.3, 3.4, 4.5]],
)
```

<br/>


#### Parameters

Items are represented by elements at the same index across lists. If the embedding parameter is missing, it will be generated from the document parameter using the collection's embedding function.

- ids `list[string]` `required`  
List of unique item identifiers.
- metadatas `list[dict]` `optional`  
List of metadata dictionaries for each item.
- documents `list[string]` `required`  
List of item documents.
- embeddings `list[list[float]]` `optional`  
List of item embeddings.

<br/>

#### Returns
none

<br/>

****

<br/>

## Delete an item

This methods deletes item objects from the collection object.

<br/>

#### Method

```python
collection.delete(
    ids=["1", "2"],
    where={"fruit": { "$eq": "apple"},
    where_document={"$contains": "red"}
)
```

<br/>

#### Parameters

Items are represented by elements at the same index across lists. If the ids parameter is missing, this method will delete all items in the collection based on the filters.

- ids `list[string]` `optional`  
List of unique item identifiers.
- where `dict` `optional`
 Dictionary to filter deletion by item metadata.
- where_document `dict` `optional`
 Dictionary to filter deletion by item document content.

<br/>

#### Returns

Returns a list of deleted item ids as strings.

<br/>

#### Exceptions

- Exception raised if an id is not found in the collection and the where filter is not provided.
- If both ids and filters are provided, the method deletes items at ids that match filters. Exception raised if any ids are not found.

<br/>

****

<br/>

## Retrieve an item

This method retrieves item objects from the collection object.

<br/>

#### Method
```python
collection = client.get_collection(name="colors")

items = collection.get(
    ids=["1", "2", "3"],
    where={"fruit": "blueberry"},
    where_document={"$contains": "blue"},
    limit=1,
    offset=1,
    include=["embeddings", "metadatas", "documents"],
)
```

<br/>

#### Parameters

If no ids or where filter is provided, the method returns all embeddings up to the limit, starting at the offset.

- ids `list[string]` `optional`  
List of unique item identifiers.
- limit `int` `optional`  
The maximum number of documents to return.
- offset `int` `optional`  
The offset to start returning results from.
- where `dict` `optional`  
 Dictionary to filter deletion by item metadata. View [filter documentation](#filters) for formatting dictionary.
- where_document `dict` `optional`  
 Dictionary to filter deletion by document content. View [filter documentation](#filters) for formatting dictionary.
- include `list[string]` `optional`  
A list of what to include in the results. Can contain "embeddings", "metadatas", and "documents". Ids are always included. Default: ["metadatas", "documents"].

<br/>

#### Returns

Returns a dictionary containing keys specified by the include parameter. Each key has a list of values, with each value representing a unique item.

- ids `list[string]`  
List of unique item identifiers.
- metadatas `list[dict]`  
List of metadata dictionaries for each item.
- documents `list[string]`  
List of item documents.
- embeddings `list[list[float]]`  
List of item embeddings.

<br/>

****

<br/>

## Query for items

This method queries for items in the collection object, with a query text or query embedding.

<br/>

#### Method

````python
collection.query(
    query_embeddings=[[1.1, 2.2, 3.3], [1.2, 2.3, 3.4]],
    query_texts=["blue whale", "red balloon"],
    n_results=10,
    where={"metadata_field": "is_equal_to_this"},
    where_document={"$contains": "search_string"},
    include=["metadatas", "documents", "distances"]
)
````

<br/>

#### Configuration

This method can be called with 2 parameter configurations:

1.
query_embeddings `required`  
n_results `optional`  
where `optional`  
where_document `optional`  
include `optional`  

2.
query_texts `required`  
n_results `optional`  
where `optional`  
where_document `optional`  
include `optional`  

<br/>

#### Parameters

- query_embeddings `list[list[float]]` `required/optional`  
A list of embeddings to find the closest neighbors for. Optional if query_texts are provided; otherwise, required.
- query_texts `list[string]` `optional/required`  
A list of document texts to find the closest neighbors for. Optional if query_embeddings are provided; otherwise, required.
- n_results `int` `optional`
Maximum number of results to return. Default: 10.
- where `dict` `optional`
Dictionary to filter deletion by item metadata. View [filter documentation](#filters) for formatting dictionary.
- where_document `dict` `optional`
Dictionary to filter deletion by item metadata. View [filter documentation](#filters) for formatting dictionary.
- include `lis[string]` `optional`
A list of what to include in the results. Can contain "embeddings", "metadatas", "documents", "distances". Ids are always included. Default: ["metadatas", "documents", "distances"].

<br/>

#### Returns

Returns a dictionary containing keys specified by the include parameter. Each key has a list of values, with each value representing a unique item.

- ids `list[string]`  
List of unique item identifiers.
- metadatas `list[dict]`  
List of metadata dictionaries for each item.
- documents `list[string]`  
List of item documents.
- embeddings `list[list[float]]`  
List of item embeddings.
- distances `list[float]`  
A list of distances of the item's embedding from the query's embedding.

<br/>

#### Exceptions

- If the supplied query_embeddings are not the same dimension as the collection, an exception will be raised.

<br/>

****

<br/>

## Filters

Use filters to narrow down results when retrieving and querying items.

<br/>

#### Filter by metadata

Use the 'where' parameter with a dictionary specifying the metadata field, operator, and value.

Operators:

- `$eq`: equal to (string, int, float)
- `$ne`: not equal to (string, int, float)
- `$gt`: greater than (int, float)
- `$gte`: greater than or equal to (int, float)
- `$lt`: less than (int, float)
- `$lte`: less than or equal to (int, float)

Example:

This example returns items which meet two conditions:

- Metadata field 'price' of greater than 10.
- Metadata field 'price' of less than 50.

````python
where={
    "price": {
        "$gt": 10,
        "$lt": 50
    }
}
````

<br/>

#### Filter by document

Use 'where_document' with a dictionary containing the '$contains' operator and the text to match.

<br/>

Operator:
- `$contains`: text (string) 

<br/>

Example:

This example retrieves documents containing the text "blue".

````python
where_document={"$contains": "blue"}
````

<br/>

#### Combine Filters

Operators:

- `$and`: Satisfies all filters.
- `$or`: Satisfies one of the filters.

Example:

Return items which have metadata fields price and color with the condition:  
(price > 10 and price < 50) `$and` (color = "red" `$or` color = "blue").

````python
where={
    "$and": [
        {
            "price": {
                "$gt": 10,
                "$lt": 50
            }
        },
        {
            "$or": [
                {
                    "color": {
                        "$eq": "red"
                    }
                },
                {
                    "color": {
                        "$eq": "blue"
                    }
                }
            ]
        }
    ]
}
````

<br/>

****

<br/>

## Other Methods

Full Documentation coming soon.

<br/>

```python

# get a collection or create if it doesn't exist already
collection = client.get_or_create_collection("tweets1")

# resets entire database - this *cant* be undone!
client.reset()

# returns timestamp to check if service is up
client.heartbeat()

# change the name or metadata on a collection
collection.modify(name="testname2")

# returns the number of items in a collection
collection.count()

# convenience, get first 5 items from a collection
collection.peek()

# advanced: manually create the embedding search index
collection.create_index()

```

</TabItem>
<TabItem value="js" label="JavaScript">

### Run the backend

Run `docker-compose up -d --build` to run a backend in Docker on your local computer. 

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

</Tabs>

