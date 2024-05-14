---
---

# VoyageAI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

Chroma also provides a convenient wrapper around VoyageAI's embedding API. This embedding function runs remotely on VoyageAI’s servers, and requires an API key. You can get an API key by signing up for an account at [VoyageAI](https://dash.voyageai.com/api-keys).

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

This embedding function relies on the `voyageai` python package, which you can install with `pip install voyageai`.

```python
from chromadb.utils.embedding_functions import VoyageAIEmbeddingFunction
voyageai_ef  = VoyageAIEmbeddingFunction(api_key="YOUR_API_KEY",  model_name="voyage-law-2", input_type=VoyageAIEmbeddingFunction.InputType.DOCUMENT)
result = voyageai_ef(input=["document1","document2"])
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const {VoyageAIEmbeddingFunction, InputType} = require('chromadb');
// const {VoyageAIEmbeddingFunction, InputType}  from "chromadb"; // ESM import
const embedder = new VoyageAIEmbeddingFunction("apiKey", "voyage-law-2", InputType.DOCUMENT)

// use directly 
const embeddings = embedder.generate(["document1","document2"])

// pass documents to query for .add and .query
const collection = await client.createCollection({name: "name", embeddingFunction: embedder})
const collectionGet = await client.getCollection({name:"name", embeddingFunction: embedder})
```

</TabItem>

</Tabs>



You should pass in the `model_name` argument, which lets you choose which VoyageAI embeddings model to use. You can see the available models [here](https://docs.voyageai.com/docs/embeddings).


