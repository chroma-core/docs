---
---

# Cloudflare Workers AI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

Chroma provides a convenient wrapper around Cloudflare Workers AI REST API. This embedding function runs remotely on a Cloudflare Workers AI. It requires an API key and an account Id or gateway endpoint. You can get an API key by signing up for an account at [Cloudflare Workers AI](https://cloudflare.com/).

Visit the [Cloudflare Workers AI documentation](https://developers.cloudflare.com/workers-ai/) for more information on getting started.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
import chromadb.utils.embedding_functions as embedding_functions
cf_ef = embedding_functions.CloudflareWorkersAIEmbeddingFunction(
                api_key = "YOUR_API_KEY",
                account_id = "YOUR_ACCOUNT_ID",
                model_name = "@cf/baai/bge-base-en-v1.5",
            )
cf_ef(input=["This is my first text to embed", "This is my second document"])
```

You can pass in an optional `model_name` argument, which lets you choose which Cloudflare Workers AI [model](https://developers.cloudflare.com/workers-ai/models/#text-embeddings) to use. By default, Chroma uses `@cf/baai/bge-base-en-v1.5`.

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
// const {CloudflareWorkersAIEmbeddingFunction} = require('chromadb'); //CJS import
import {CloudflareWorkersAIEmbeddingFunction}  from "chromadb"; //ESM import
const embedder = new CloudflareWorkersAIEmbeddingFunction({
    api_key: 'YOUR_API_KEY',
    account_id: "YOUR_ACCOUNT_ID",
    model_name: '@cf/baai/bge-base-en-v1.5',
});

// use directly
const embeddings = embedder.generate(['document1', 'document2']);

// pass documents to query for .add and .query
const collection = await client.createCollection({name: "name", embeddingFunction: embedder})
const collectionGet = await client.getCollection({name:"name", embeddingFunction: embedder})
```
</TabItem>
</Tabs>
