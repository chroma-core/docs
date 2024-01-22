---
---

# Jina AI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

Chroma provides a convenient wrapper around JinaAI's embedding API. This embedding function runs remotely on JinaAI's servers, and requires an API key. You can get an API key by signing up for an account at [JinaAI](https://jina.ai/embeddings/).

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

This embedding function relies on the `requests` python package, which you can install with `pip install requests`.

```python
import chromadb.utils.embedding_functions as embedding_functions
jinaai_ef = embedding_functions.JinaEmbeddingFunction(
                api_key="YOUR_API_KEY",
                model_name="jina-embeddings-v2-base-en"
            )
jinaai_ef(input=["This is my first text to embed", "This is my second document"])
```

You can pass in an optional `model_name` argument, which lets you choose which Jina model to use. By default, Chroma uses `jina-embedding-v2-base-en`.

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const {JinaEmbeddingFunction} = require('chromadb');
const embedder = new JinaEmbeddingFunction({
  jinaai_api_key: 'jina_****',
  model_name: 'jina-embeddings-v2-base-en',
});

// use directly
const embeddings = embedder.generate(['document1', 'document2']);

// pass documents to query for .add and .query
const collection = await client.createCollection({name: "name", embeddingFunction: embedder})
const collectionGet = await client.getCollection({name:"name", embeddingFunction: embedder})
```
</TabItem>
</Tabs>
