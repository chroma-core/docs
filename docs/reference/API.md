---
sidebar_label: api
title: api
---

## API Objects

```python
class API(Component, ABC)
```

#### heartbeat

```python
@abstractmethod
def heartbeat() -> int
```

Get the current time in nanoseconds since epoch.
Used to check if the server is alive.

**Returns**:

- `int` - The current time in nanoseconds since epoch

#### list\_collections

```python
@abstractmethod
def list_collections() -> Sequence[Collection]
```

List all collections.

**Returns**:

- `Sequence[Collection]` - A list of collections
  

**Examples**:

    ```python
    client.list_collections()
    # [collection(name="my_collection", metadata={})]
    ```

#### create\_collection

```python
@abstractmethod
def create_collection(name: str,
                      metadata: Optional[CollectionMetadata] = None,
                      embedding_function: Optional[EmbeddingFunction] = ef.
                      DefaultEmbeddingFunction(),
                      get_or_create: bool = False) -> Collection
```

Create a new collection with the given name and metadata.

**Arguments**:

- `name` - The name of the collection to create.
- `metadata` - Optional metadata to associate with the collection.
- `embedding_function` - Optional function to use to embed documents.
  Uses the default embedding function if not provided.
- `get_or_create` - If True, return the existing collection if it exists.
  

**Returns**:

- `Collection` - The newly created collection.
  

**Raises**:

- `ValueError` - If the collection already exists and get_or_create is False.
- `ValueError` - If the collection name is invalid.
  

**Examples**:

    ```python
    client.create_collection("my_collection")
    # collection(name="my_collection", metadata={})

    client.create_collection("my_collection", metadata={"foo": "bar"})
    # collection(name="my_collection", metadata={"foo": "bar"})
    ```

#### get\_collection

```python
@abstractmethod
def get_collection(
    name: str,
    embedding_function: Optional[EmbeddingFunction] = ef.
    DefaultEmbeddingFunction()
) -> Collection
```

Get a collection with the given name.

**Arguments**:

- `name` - The name of the collection to get
- `embedding_function` - Optional function to use to embed documents.
  Uses the default embedding function if not provided.
  

**Returns**:

- `Collection` - The collection
  

**Raises**:

- `ValueError` - If the collection does not exist
  

**Examples**:

    ```python
    client.get_collection("my_collection")
    # collection(name="my_collection", metadata={})
    ```

#### get\_or\_create\_collection

```python
@abstractmethod
def get_or_create_collection(
    name: str,
    metadata: Optional[CollectionMetadata] = None,
    embedding_function: Optional[EmbeddingFunction] = ef.
    DefaultEmbeddingFunction()
) -> Collection
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

#### delete\_collection

```python
@abstractmethod
def delete_collection(name: str) -> None
```

Delete a collection with the given name.

**Arguments**:

- `name` - The name of the collection to delete.
  

**Raises**:

- `ValueError` - If the collection does not exist.
  

**Examples**:

    ```python
    client.delete_collection("my_collection")
    ```

#### reset

```python
@abstractmethod
def reset() -> bool
```

Resets the database. This will delete all collections and entries.

**Returns**:

- `bool` - True if the database was reset successfully.

#### raw\_sql

```python
@abstractmethod
def raw_sql(sql: str) -> pd.DataFrame
```

Runs a raw SQL query against the database

**Arguments**:

- `sql` - The SQL query to run
  

**Returns**:

- `pd.DataFrame` - A pandas dataframe containing the results of the query

#### create\_index

```python
@abstractmethod
def create_index(collection_name: str) -> bool
```

Creates an index for the given collection

**Arguments**:

- `collection_name` - The collection to create the index for. Defaults to None.
  

**Returns**:

- `bool` - True if the index was created successfully

#### get\_version

```python
@abstractmethod
def get_version() -> str
```

Get the version of Chroma.

**Returns**:

- `str` - The version of Chroma

#### get\_settings

```python
@abstractmethod
def get_settings() -> Settings
```

Get the settings used to initialize the client.

**Returns**:

- `Settings` - The settings used to initialize the client.

