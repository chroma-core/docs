---
---

# Cohere

Chroma also provides a convenient wrapper around Cohere's embedding API. This embedding function runs remotely on Cohere’s servers, and requires an API key. You can get an API key by signing up for an account at [Cohere](https://dashboard.cohere.ai/welcome/register).

<div class="data_table"></div>

| Models | Input | Dimensionality | Context Size| 
|--|--|--|--|--|
|`embed-english-v3.0` | English | 1024 | 512 (recommended) | 
|`embed-multilingual-v3.0` | [Full List](https://docs.cohere.com/docs/supported-languages) | 1024 | 512 (recommended) | 
|`embed-english-light-v3.0` | English | 384 | 512 (recommended) | 
|`embed-multilingual-light-v3.0` | [Full List](https://docs.cohere.com/docs/supported-languages) | 384 | 512 (recommended) | 
|`embed-english-v2.0` | English | 4096 | 512 (recommended) | 
|`embed-english-light-v2.0` | English | 1024 | 512 (recommended) |
|`embed-multilingual-v2.0` | [Full List](https://docs.cohere.com/docs/supported-languages) | 768 | 512 (recommended) | 


## Basic Usage

### Python

```bash
pip install cohere
```

```python

from chromadb.utils import embedding_functions

embedder = embedding_functions.CohereEmbeddingFunction(
        api_key="YOUR_API_KEY")

collection = client.create_collection(
        name="cohere_ef", 
        embedding_function=embedder)
```

### Javascript

```bash
yarn add cohere-ai
```

```javascript
import { ChromaClient, CohereEmbeddingFunction } from 'chromadb'

const embedder = new CohereEmbeddingFunction({
    apiKey: "YOUR_API_KEY"
})

const collection = await client.createCollection({
    name: "cohere_ef", 
    embeddingFunction: embedder
})
```

## Advanced Usage

### Call directly 

By passing the embedding function to a Collection, Chroma handles the embedding of documents and queries for you. However in some cases you may want to generate the embeddings outside and handle them yourself.

#### Python

```python
embeddings = embedder(["document1","document2"])
# [[0.04565250128507614, 0.01611952856183052...], [0.030171213671565056, 0.007690359838306904...]]
```

#### Javascript

```javascript
const embeddings = embedder.generate(["document1","document2"])
// [[0.04565250128507614, 0.01611952856183052...], [0.030171213671565056, 0.007690359838306904...]]
```

### Using a different model

You can pass in an optional `model_name` argument, which lets you choose which Cohere embeddings model to use. By default, Chroma uses `large` model. You can see the available models under `Get embeddings` section [here](https://docs.cohere.ai/reference/embed).


### Multilingual model example

#### Python

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

#### Javascript

```javascript
import { CohereEmbeddingFunction } from 'chromadb'
const embedder = new CohereEmbeddingFunction("apiKey")

multilingual_texts  = [ 'Hello from Cohere!', 'مرحبًا من كوهير!', 
        'Hallo von Cohere!', 'Bonjour de Cohere!', 
        '¡Hola desde Cohere!', 'Olá do Cohere!', 
        'Ciao da Cohere!', '您好，来自 Cohere！',
        'कोहेरे से नमस्ते!'  ]

const embeddings = embedder.generate(multilingual_texts)

```

For more information on multilingual model you can read [here](https://docs.cohere.ai/docs/multilingual-language-models).