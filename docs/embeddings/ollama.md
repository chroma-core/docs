---
---

# Ollama Embeddings

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

Chroma provides a convenient wrapper around [Ollama](https://github.com/ollama/ollama)'
s [embeddings API](https://github.com/ollama/ollama/blob/main/docs/api.md#generate-embeddings). You can use
the `OllamaEmbeddingFunction` embedding function to generate embeddings for your documents with
a [model](https://github.com/ollama/ollama?tab=readme-ov-file#model-library) of your choice.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
import chromadb.utils.embedding_functions as embedding_functions

ollama_ef = embedding_functions.OllamaEmbeddingFunction(
    url="http://localhost:11434/api/embeddings",
    model_name="llama2",
)

embeddings = ollama_ef(["This is my first text to embed",
                        "This is my second document"])
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
// const {OllamaEmbeddingFunction} = require('chromadb'); //CJS import
import {OllamaEmbeddingFunction}  from "chromadb"; //ESM import
const embedder = new OllamaEmbeddingFunction({
    url: "http://127.0.0.1:11434/api/embeddings",
    model: "llama2"
})

// use directly 
const embeddings = embedder.generate(["document1", "document2"])

// pass documents to query for .add and .query
const collection = await client.createCollection({
    name: "name",
    embeddingFunction: embedder
})
const collection = await client.getCollection({
    name: "name",
    embeddingFunction: embedder
})
```

</TabItem>

</Tabs>


You can pass in an optional `model_name` argument, which lets you choose which OpenAI embeddings model to use. By
default, Chroma uses `text-embedding-ada-002`. You can see a list of all available
models [here](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings).
