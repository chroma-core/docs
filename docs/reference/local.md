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
def heartbeat() -> int
```

Ping the database to ensure it is alive

**Returns**:

  The current time in milliseconds

#### create\_collection

```python
def create_collection(name: str,
                      metadata: Optional[Metadata] = None,
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
- `ValueError` - If the collection name is invalid
  

**Examples**:

  ```python
  client.create_collection("my_collection")
  # collection(name="my_collection", metadata={})
  
  client.create_collection("my_collection", metadata={"foo": "bar"})
  # collection(name="my_collection", metadata={"foo": "bar"})
  ```

#### get\_or\_create\_collection

```python
def get_or_create_collection(
        name: str,
        metadata: Optional[Metadata] = None,
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

  ```python
  client.get_or_create_collection("my_collection")
  # collection(name="my_collection", metadata={})
  ```

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

  ```python
  client.get_collection("my_collection")
  # collection(name="my_collection", metadata={})
  ```

#### list\_collections

```python
def list_collections() -> Sequence[Collection]
```

List all collections.

**Returns**:

  A list of collections
  

**Examples**:

  ```python
  client.list_collections()
  # [collection(name="my_collection", metadata={})]
  ```

#### delete\_collection

```python
def delete_collection(name: str) -> None
```

Delete a collection with the given name.

**Arguments**:

- `name` - The name of the collection to delete
  

**Raises**:

- `ValueError` - If the collection does not exist
  

**Examples**:

  ```python
  client.delete_collection("my_collection")
  ```

#### reset

```python
def reset() -> bool
```

Reset the database. This will delete all collections and items.

**Returns**:

  True if the database was reset successfully

#### persist

```python
def persist() -> bool
```

Persist the database to disk.

**Returns**:

  True if the database was persisted successfully

#### get\_version

```python
def get_version() -> str
```

Get the version of Chroma.

**Returns**:

  The version of Chroma

