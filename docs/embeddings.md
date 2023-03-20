---
sidebar_position: 4
---

# 🧬 Embeddings

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

***

Embeddings are the A.I-native way to represent any kind of data, making them the perfect fit for working with all kinds of A.I-powered tools and algorithms. They can represent text, images, and soon audio and video. There are many options for creating embeddings, whether locally using an installed library, or by calling an API.

Chroma provides lightweight wrappers around popular embedding providers, making it easy to use them in your apps. You can set an embedding function when you create a Chroma collection, which will be used automatically, or you can call them directly yourself.

<Tabs queryString groupId="lang" className="hideTabSwitcher">

<TabItem value="py" label="Python">

To get Chroma's embedding functions, import the `chromadb.utils.embedding_functions` module.

```python
from chromadb.utils import embedding_functions
```


## Default: Sentence Transformers

By default, Chroma uses [Sentence Transformers](https://www.sbert.net/) to create embeddings. Sentence Transformers is a library for creating sentence and document embeddings that can be used for a wide variety of tasks. It is based on the [Transformers](https://huggingface.co/transformers/) library from Hugging Face. This embedding function runs locally on your machine, and may require you download the model files (this will happen automatically).

```python
sentence_transformer_ef = embedding_functions.SentenceTransformerEmbeddingFunction(model_name="all-MiniLM-L6-v2")
```

You can pass in an optional `model_name` argument, which lets you choose which Sentence Transformers model to use. By default, Chroma uses `all-MiniLM-L6-v2`. You can see a list of all available models [here](https://www.sbert.net/docs/pretrained_models.html).

</TabItem>
<TabItem value="js" label="JavaScript">



</TabItem>
</Tabs>



## OpenAI

Chroma provides a convenient wrapper around OpenAI's embedding API. This embedding function runs remotely on OpenAI's servers, and requires an API key. You can get an API key by signing up for an account at [OpenAI](https://openai.com/api/).

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

This embedding function relies on the `openai` python package, which you can install with `pip install openai`.

```python
openai_ef = embedding_functions.OpenAIEmbeddingFunction(
                api_key="YOUR_API_KEY",
                model_name="text-embedding-ada-002"
            )
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const {OpenAIEmbeddingFunction} = require('chromadb');
const embedder = new OpenAIEmbeddingFunction("apiKey")

// use directly 
const embeddings = embedder.generate(["document1","document2"])

// pass documents to query for .add and .query
const collection = await client.createCollection("name", {}, embedder)
const collection = await client.getCollection("name", {}, embedder)
```

</TabItem>

</Tabs>


You can pass in an optional `model_name` argument, which lets you choose which OpenAI embeddings model to use. By default, Chroma uses `text-embedding-ada-002`. You can see a list of all available models [here](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings).

## Cohere

Chroma also provides a convenient wrapper around Cohere's embedding API. This embedding function runs remotely on Cohere’s servers, and requires an API key. You can get an API key by signing up for an account at [Cohere](https://dashboard.cohere.ai/welcome/register).

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

This embedding function relies on the `cohere` python package, which you can install with `pip install cohere`.

```python
cohere_ef  = embedding_functions.CohereEmbeddingFunction(api_key="YOUR_API_KEY",  model_name="large")
cohere_ef(texts=["document1","document2"])
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const {CohereEmbeddingFunction} = require('chromadb');
const embedder = new CohereEmbeddingFunction("apiKey")

// use directly 
const embeddings = embedder.generate(["document1","document2"])

// pass documents to query for .add and .query
const collection = await client.createCollection("name", {}, embedder)
const collectionGet = await client.getCollection("name", {}, embedder)
```

</TabItem>

</Tabs>



You can pass in an optional `model_name` argument, which lets you choose which Cohere embeddings model to use. By default, Chroma uses `large` model. You can see the available models under `Get embeddings` section [here](https://docs.cohere.ai/reference/embed).

### Multilingual model example

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
cohere_ef  = embedding_functions.CohereEmbeddingFunction(
        api_key="YOUR_API_KEY", 
        model_name="multilingual-22-12")

multilingual_texts  = [ 'Hello from Cohere!', 'مرحبًا من كوهير!', 
        'Hallo von Cohere!', 'Bonjour de Cohere!', 
        '¡Hola desde Cohere!', 'Olá do Cohere!', 
        'Ciao da Cohere!', '您好，来自 Cohere！',
        'कोहेरे से नमस्ते!'  ]

cohere_ef(texts=multilingual_texts)

```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const {CohereEmbeddingFunction} = require('chromadb');
const embedder = new CohereEmbeddingFunction("apiKey")

multilingual_texts  = [ 'Hello from Cohere!', 'مرحبًا من كوهير!', 
        'Hallo von Cohere!', 'Bonjour de Cohere!', 
        '¡Hola desde Cohere!', 'Olá do Cohere!', 
        'Ciao da Cohere!', '您好，来自 Cohere！',
        'कोहेरे से नमस्ते!'  ]

const embeddings = embedder.generate(multilingual_texts)

```


</TabItem>

</Tabs>



For more information on multilingual model you can read [here](https://docs.cohere.ai/docs/multilingual-language-models).

## Custom Embedding Functions

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

You can create your own embedding function to use with Chroma, it just needs to implement the `EmbeddingFunction` protocol.

```python
from chromadb.api.types import Documents, EmbeddingFunction, Embeddings

class MyEmbeddingFunction(EmbeddingFunction):
    def __call__(self, texts: Documents) -> Embeddings:
        # embed the documents somehow
        return embeddings
```

We welcome contributions! If you create an embedding function that you think would be useful to others, please consider [submitting a pull request](https://github.com/chroma-core/chroma) to add it to Chroma's `embedding_functions` module.


</TabItem>
<TabItem value="js" label="JavaScript">

You can create your own embedding function to use with Chroma, it just needs to implement the `EmbeddingFunction` protocol. The `.generate` method in a class is strictly all you need.

```javascript
class MyEmbeddingFunction {
  private api_key: string;

  constructor(api_key: string) {
    this.api_key = api_key;
  }

  public async generate(texts: string[]): Promise<number[][]> {
    // do things to turn texts into embeddings with an api_key perhaps
    return embeddings;
  }
}
```

</TabItem>

</Tabs>

We welcome pull requests to add new Embedding Functions to the community.