---
sidebar_label: Client
title: Client
sidebar_position: 1
---

## LocalAPI Objects

```python
class LocalAPI(API)
```

#### heartbeat

```python
def heartbeat()
```

Ping the database to ensure it is alive

#### create\_collection

```python
def create_collection(name: str,
                      metadata: Optional[Dict] = None,
                      embedding_function: Optional[Callable] = None,
                      get_or_create: bool = False) -> Collection
```

Create a new collection with the given name and metadata.

**Arguments**:

- `name` - The name of the collection to create
- `metadata` - Optional metadata to associate with the collection
- `embedding_function` - Optional function to use to embed documents
- `get_or_create` - If True, return the existing collection if it exists
  

**Returns**:

  The newly created collection
  

**Raises**:

- `ValueError` - If the collection already exists and get_or_create is False
  

**Examples**:

  &gt;&gt;&gt; client.create_collection(&quot;my_collection&quot;)
  collection(name=&quot;my_collection&quot;, metadata={})
  
  &gt;&gt;&gt; client.create_collection(&quot;my_collection&quot;, metadata={&quot;foo&quot;: &quot;bar&quot;})
  collection(name=&quot;my_collection&quot;, metadata={&quot;foo&quot;: &quot;bar&quot;})

#### get\_or\_create\_collection

```python
def get_or_create_collection(
        name: str,
        metadata: Optional[Dict] = None,
        embedding_function: Optional[Callable] = None) -> Collection
```

Get or create a collection with the given name and metadata.

**Arguments**:

- `name` - The name of the collection to get or create
- `metadata` - Optional metadata to associate with the collection
- `embedding_function` - Optional function to use to embed documents
  

**Returns**:

  The collection
  

**Examples**:

  &gt;&gt;&gt; client.get_or_create_collection(&quot;my_collection&quot;)
  collection(name=&quot;my_collection&quot;, metadata={})

#### get\_collection

```python
def get_collection(
        name: str,
        embedding_function: Optional[Callable] = None) -> Collection
```

Get a collection with the given name.

**Arguments**:

- `name` - The name of the collection to get
- `embedding_function` - Optional function to use to embed documents
  

**Returns**:

  The collection
  

**Raises**:

- `ValueError` - If the collection does not exist
  

**Examples**:

  &gt;&gt;&gt; client.get_collection(&quot;my_collection&quot;)
  collection(name=&quot;my_collection&quot;, metadata={})

#### list\_collections

```python
def list_collections() -> Sequence[Collection]
```

List all collections.

**Returns**:

  A list of collections
  

**Examples**:

  &gt;&gt;&gt; client.list_collections()
  [collection(name=&quot;my_collection&quot;, metadata={})]

#### delete\_collection

```python
def delete_collection(name: str)
```

Delete a collection with the given name.

**Arguments**:

- `name` - The name of the collection to delete
  

**Raises**:

- `ValueError` - If the collection does not exist
  

**Examples**:

  &gt;&gt;&gt; client.delete_collection(&quot;my_collection&quot;)

#### reset

```python
def reset()
```

Reset the database. This will delete all collections and items.

**Returns**:

  True if the database was reset successfully

#### persist

```python
def persist()
```

Persist the database to disk.

**Returns**:

  True if the database was persisted successfully

#### get\_version

```python
def get_version()
```

Get the version of Chroma.

**Returns**:

  The version of Chroma

