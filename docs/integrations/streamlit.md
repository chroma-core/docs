---
slug: /integrations/streamlit
title: 🎈 Streamlit
---

Streamlit is an open-source Python library that makes it easy to create and share beautiful, custom web apps for machine learning and data science. In just a few minutes you can build and deploy powerful data apps.

<img src="https://img.shields.io/github/stars/streamlit/streamlit.svg?style=social&label=Star&maxAge=2400"/> 

[Apache 2.0 License](https://github.com/langchain-ai/langchain/blob/master/LICENSE) &nbsp;&bull;&nbsp;[Site](https://streamlit.io/) 

| Languages | Docs | Github |
|---|---|--|--|
|Python | [Docs](https://docs.streamlit.io/) | [Code](https://github.com/langchain-ai/langchain)

### Install

`pip install streamlit`

### Main Benefits

- Common Patterns for chain-of-thought and prompt templating
- Many integrations and data loaders
- Deep integration to LangSmith monitoring (developed by the same team)

### Simple Example

#### Python

```python
import chromadb
from langchain.vectorstores import Chroma
from langchain.embeddings.sentence_transformer import SentenceTransformerEmbeddings

# Chroma code
persistent_client = chromadb.PersistentClient()
collection = persistent_client.get_or_create_collection("collection_name")
collection.add(ids=["1", "2", "3"], documents=["a", "b", "c"])

# LangChain Code
embedding_function = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

langchain_chroma = Chroma(
    client=persistent_client,
    collection_name="collection_name",
    embedding_function=embedding_function,
)
# Important! - the embedding functiion passed to langchain is their wrapper, not Chroma's


print("There are", langchain_chroma._collection.count(), "in the collection")
```

### Resources

- [LangChain + Chroma Announcement Post](https://blog.langchain.dev/langchain-chroma/) on the LangChain blog
- [LangChain's Chroma Documentation](https://python.langchain.com/en/latest/modules/indexes/vectorstores.html?highlight=chroma#langchain.vectorstores.Chroma)

#### Tutorials

 - [Chroma and LangChain tutorial](https://github.com/grumpyp/chroma-langchain-tutorial) - The demo showcases how to pull data from the English Wikipedia using their API. The project also demonstrates how to vectorize data in chunks and get embeddings using OpenAI embeddings model.
  - [Create a Voice-based ChatGPT Clone That Can Search on the Internet and local files](https://betterprogramming.pub/how-to-create-a-voice-based-chatgpt-clone-that-can-search-on-the-internet-24d7f570ea8)
- [Harrison's `chroma-langchain` demo repo](https://github.com/hwchase17/chroma-langchain)
  - [question answering over documents](https://github.com/hwchase17/chroma-langchain/blob/master/qa.ipynb) - ([Replit version](https://replit.com/@swyx/LangChainChromaStarter#main.py))
  - [to use Chroma as a persistent database](https://github.com/hwchase17/chroma-langchain/blob/master/persistent-qa.ipynb)
