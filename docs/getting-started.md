---
sidebar_position: 2
title: "🔑 Getting Started"
---

# 🔑 Getting started

Chroma is a database for building AI applications with embeddings. It comes with everything you need to get started built in, and runs on your machine. A hosted version is coming soon!

### 1. Install

```bash
pip install chromadb
```

### 2. Get the Chroma Client

```python
import chromadb
chroma_client = chromadb.Client()
```

### 3. Create a collection

Collections are where you'll store your embeddings, documents, and any additional metadata. You can create a collection with a name:

```python
collection = chroma_client.create_collection(name="my_collection")
```

### 4. Add some text documents to the collection

Chroma will store your text, and handle tokenization, embedding, and indexing automatically.

```python
collection.add(
    documents=["This is a document", "This is another document"],
    metadatas=[{"source": "my_source"}, {"source": "my_source"}],
    ids=["id1", "id2"]
)
```

If you have already generated embeddings yourself, you can load them directly in:

```python
collection.add(
    embeddings=[[1.2, 2.3, 4.5], [6.7, 8.2, 9.2]],
    documents=["This is a document", "This is another document"],
    metadatas=[{"source": "my_source"}, {"source": "my_source"}],
    ids=["id1", "id2"]
)
```

### 5. Query the collection

You can query the collection with a list of query texts, and Chroma will return the `n` most similar results. It's that easy!

```python
results = collection.query(
    query_texts=["This is a query document"],
    n_results=2
)
```

By default data stored in Chroma is ephemeral - this makes it easy to prototype scripts. It's easy to make chroma persistent so you can reuse every collection you create, and add more documents to it later. It will load your data automatically when you start the client, and save it automatically when you close it. Check out the [Usage Guide](./usage-guide.md) for more info.

## 📚 Next steps

- Chroma is designed to be simple enough to get started with quickly, and flexible enough to meet many use-cases. You can use your own embedding models, query Chroma with your own embeddings, and filter on metadata. To learn more about Chroma, check out the [Usage Guide](./usage-guide.md) and [API Reference](./api-reference.md).
- Chroma is integrated in [LangChain](https://langchain.readthedocs.io/en/latest/reference/modules/vectorstore.html?highlight=chroma#langchain.vectorstores.Chroma), making it easy to build AI applications with Chroma. Check out the [integrations](./integrations.md) page to learn more.
- You can [deploy a persistent instance](./deployment) of Chroma to an external server, to make it easier to work on larger projects or with a team.

## Coming Soon

- A hosted version of Chroma, with an easy to use web UI and API
- A Javascript SDK for building AI-powered web applications with Chroma
- Multiple datatypes, including images, audio, video, and more
