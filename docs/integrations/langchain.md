---
slug: /integrations/langchain
title: 🦜️🔗 Langchain
---

LangChain is a popular open-source framework for developing applications powered by language models. 

> Insert star counter... other stuff like that

### Install

`pip install langchain` / `yarn add langchain`

### Main Benefits

- 1
- 2
- 3

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

#### Javascript

```js
// stuff goes here
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
 