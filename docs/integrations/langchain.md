---
slug: /integrations/langchain
title: 🦜️🔗 LangChain
---

LangChain is a popular open-source framework for developing applications powered by language models. 

<img src="https://img.shields.io/github/stars/langchain-ai/langchain.svg?style=social&label=Star&maxAge=2400"/> 

[MIT License](https://github.com/langchain-ai/langchain/blob/master/LICENSE) &nbsp;&bull;&nbsp;[Site](https://www.langchain.com/) 

| Languages | Docs | Github |
|---|---|--|--|
|Python | [Docs](https://python.langchain.com/docs/get_started/introduction) | [Code](https://github.com/langchain-ai/langchain)
|JS | [Docs](https://js.langchain.com/docs/get_started/introduction) | [Code](https://github.com/langchain-ai/langchainjs)

### Install

`pip install langchain` / `yarn add langchain`

### Main Benefits

- Common Patterns for chain-of-thought and prompt templating
- Many integrations and data loaders
- Deep integration to LangSmith monitoring (developed by the same team)

### Simple Example

#### Python

[Langchain Python Docs - Chroma Integration](https://python.langchain.com/docs/integrations/vectorstores/chroma)

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

[Langchain JS Docs - Chroma Integration](https://js.langchain.com/docs/integrations/vectorstores/chroma)

```js
import { OpenAI } from "langchain/llms/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { Chroma } from "langchain/vectorstores/chroma";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as fs from "fs";

// to run this first run a chroma server with `chroma run --path /path/to/data`

export const run = async () => {
  /* Initialize the LLM to use to answer the question */
  const model = new OpenAI();
  /* Load in the file we want to do question answering over */
  const text = fs.readFileSync("state_of_the_union.txt", "utf8");
  /* Split the text into chunks */
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);
  /* Create the vectorstore */
  const vectorStore = await Chroma.fromDocuments(docs, new OpenAIEmbeddings(), {
    collectionName: "state_of_the_union",
  });
  /* Create the chain */
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );
  /* Ask it a question */
  const question = "What did the president say about Justice Breyer?";
  const res = await chain.call({ question, chat_history: [] });
  console.log(res);
};
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
 
