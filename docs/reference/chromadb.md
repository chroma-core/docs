---
sidebar_label: chromadb
title: chromadb
---

#### configure

```python
def configure(**kwargs) -> None
```

Override Chroma's default settings, environment variables or .env files

#### EphemeralClient

```python
def EphemeralClient(settings: Settings = Settings()) -> API
```

Creates an in-memory instance of Chroma. This is useful for testing and
development, but not recommended for production use.

#### PersistentClient

```python
def PersistentClient(path: str = "./chroma",
                     settings: Settings = Settings()) -> API
```

Creates a persistent instance of Chroma that saves to disk. This is useful for
testing and development, but not recommended for production use.

**Arguments**:

- `path` - The directory to save Chroma's data to. Defaults to "./chroma".

#### HttpClient

```python
def HttpClient(host: str = "localhost",
               port: str = "8000",
               ssl: bool = False,
               settings: Settings = Settings()) -> API
```

Creates a client that connects to a remote Chroma server. This supports
many clients connecting to the same server, and is the recommended way to
use Chroma in production.

**Arguments**:

- `host` - The hostname of the Chroma server. Defaults to "localhost".
- `port` - The port of the Chroma server. Defaults to "8000".
- `ssl` - Whether to use SSL to connect to the Chroma server. Defaults to False.

#### Client

```python
def Client(settings: Settings = __settings) -> API
```

Return a running chroma.API instance

