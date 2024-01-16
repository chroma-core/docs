---
---

# Together AI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

Chroma provides a convenient wrapper around TogetherAI's embedding API. This embedding function runs remotely on TogetherAI's servers, and requires an API key. You can get an API key by signing up for an account at [TogetherAI](https://api.together.xyz/).

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

This embedding function relies on the 'together' python package, which you can install with `pip install together`.

```python
import chromadb.utils.embedding_functions as embedding_functions
jinaai_ef = embedding_functions.TogetherEmbeddingFunction(
                api_key="YOUR_API_KEY",
                model_name="togethercomputer/m2-bert-80M-8k-retrieval"
            )
jinaai_ef(input=["This is my first text to embed", "This is my second document"])
```

You can pass in an optional `model_name` argument, which lets you choose which Together embedding model to use. By default, Chroma uses `togethercomputer/m2-bert-80M-8k-retrieval`.

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const {TogetherEmbeddingFunction} = require('chromadb');
const embedder = new TogetherEmbeddingFunction({
  together_api_key: '****',
  model_name: 'togethercomputer/m2-bert-80M-8k-retrieval',
});

// use directly
const embeddings = await embedder.generate(['document1', 'document2']);

// pass documents to query for .add and .query
const collection = await client.createCollection({name: "name", embeddingFunction: embedder})
const collectionGet = await client.getCollection({name:"name", embeddingFunction: embedder})
```
</TabItem>
</Tabs>
