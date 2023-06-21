---
sidebar_position: 2
title: "🔑 Getting Started"
---

# 🔑 Getting started

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang" queryString>
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

***

Chroma is a database for building AI applications with embeddings. It comes with everything you need to get started built in, and runs on your machine. A [hosted version](https://airtable.com/shrOAiDUtS2ILy5vZ) is coming soon!

### 1. Install

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```py
pip install chromadb
```
<span class="small-text em">* chromadb currently does not support Python 3.11 because of pytorch</span>

</TabItem>
<TabItem value="js" label="JavaScript">


```js
npm install --save chromadb // yarn add chromadb
```

</TabItem>

</Tabs>

### 2. Get the Chroma Client

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
import chromadb
chroma_client = chromadb.Client()
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
const {ChromaClient} = require('chromadb');
const client = new ChromaClient();
```

To connect to Chroma's backend - you either need to connect to a hosted version of Chroma, or run it on your local computer. If you can run `docker-compose up -d --build` you can run Chroma. 

```bash
git clone https://github.com/chroma-core/chroma.git
cd chroma
docker-compose up -d --build
```

If you have build issues, please reach out for help in the active [Community Discord](https://discord.gg/MMeYNTmh3x). Most issues get fixed in a few minutes.

</TabItem>

</Tabs>

### 3. Create a collection

Collections are where you'll store your embeddings, documents, and any additional metadata. You can create a collection with a name:

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection = chroma_client.create_collection(name="my_collection")
```

</TabItem>
<TabItem value="js" label="JavaScript">

For this example, we want to generate embeddings from text. OpenAI's `ada-002` model is popular, free, and a quick [signup](https://openai.com/api/). Grab your API key and come back. Chroma's API is polymorphic (it can run in the browser or server-side), but OpenAIs is not. So run this example server-side.

:::caution
Please take steps to secure your API when interacting with frontend systems.
:::

```js
const {OpenAIEmbeddingFunction} = require('chromadb');
const embedder = new OpenAIEmbeddingFunction({openai_api_key: "your_api_key"})
const collection = await client.createCollection({name: "my_collection", embeddingFunction: embedder})
```

</TabItem>

</Tabs>



### 4. Add some text documents to the collection

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

Chroma will store your text, and handle tokenization, embedding, and indexing automatically.

```python
collection.add(
    documents=["This is a document", "This is another document"],
    metadatas=[{"source": "my_source"}, {"source": "my_source"}],
    ids=["id1", "id2"]
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

Chroma will store your text, and handle tokenization, embedding, and indexing automatically.

```js
await collection.add({
    ids: ["id1", "id2"],
    metadatas: [{"source": "my_source"}, {"source": "my_source"}],
    documents: ["This is a document", "This is another document"],
}) 
```

</TabItem>

</Tabs>



If you have already generated embeddings yourself, you can load them directly in:

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection.add(
    embeddings=[[1.2, 2.3, 4.5], [6.7, 8.2, 9.2]],
    documents=["This is a document", "This is another document"],
    metadatas=[{"source": "my_source"}, {"source": "my_source"}],
    ids=["id1", "id2"]
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
await collection.add({
    ids: ["id1", "id2"],
    embeddings: [[1.2, 2.3, 4.5], [6.7, 8.2, 9.2]],
    where: [{"source": "my_source"}, {"source": "my_source"}],
    documents: ["This is a document", "This is another document"]
}) 
```

</TabItem>

</Tabs>



### 5. Query the collection

You can query the collection with a list of query texts, and Chroma will return the `n` most similar results. It's that easy!

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
results = collection.query(
    query_texts=["This is a query document"],
    n_results=2
)
```

By default data stored in Chroma is ephemeral making it easy to prototype scripts. It's easy to make Chroma persistent so you can reuse every collection you create and add more documents to it later. It will load your data automatically when you start the client, and save it automatically when you close it. Check out the [Usage Guide](./usage-guide.md) for more info.

Find [chromadb on PyPI](https://pypi.org/project/chromadb/).


</TabItem>
<TabItem value="js" label="JavaScript">

```js
const results = await collection.query({
    nResults: 2, 
    queryTexts: ["This is a query document"]
}) 
```

Find [chromadb on npm](https://www.npmjs.com/package/chromadb).

</TabItem>

</Tabs>


## 📚 Next steps

- Chroma is designed to be simple enough to get started with quickly and flexible enough to meet many use-cases. You can use your own embedding models, query Chroma with your own embeddings, and filter on metadata. To learn more about Chroma, check out the [Usage Guide](./usage-guide.md) and [API Reference](./api-reference.md).
- Chroma is integrated in [LangChain](https://python.langchain.com/en/latest/modules/indexes/vectorstores.html?highlight=chroma#langchain.vectorstores.Chroma) (`python` and `js`), making it easy to build AI applications with Chroma. Check out the [integrations](./integrations.md) page to learn more.
- You can [deploy a persistent instance](./deployment) of Chroma to an external server, to make it easier to work on larger projects or with a team.

## Coming Soon

- A hosted version of Chroma, with an easy to use web UI and API
- Multiple datatypes, including images, audio, video, and more
