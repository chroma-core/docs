---
---

# OpenAI

Chroma provides a convenient wrapper around OpenAI's embedding API. This embedding function runs remotely on OpenAI's servers, and requires an API key. You can get an API key by signing up for an account at [OpenAI](https://openai.com/api/).

<div class="data_table"></div>

| Models | Input | Dimensionality | Context Size| 
|--|--|--|--|--|
|`ada-002` | English | 1536 | 2048 | 

## Basic Usage

### Python

```bash
pip install openai
```

```python

from chromadb.utils import embedding_functions

embedder = embedding_functions.OpenAIEmbeddingFunction(
        api_key="YOUR_API_KEY")

collection = client.create_collection(
        name="oai_ef", 
        embedding_function=embedder)
```

### Javascript

```bash
yarn add openai
```

```javascript
import { ChromaClient, OpenAIEmbeddingFunction } from 'chromadb'

const embedder = new OpenAIEmbeddingFunction({
    openai_api_key: "YOUR_API_KEY"
})

const collection = await client.createCollection({
    name: "oai_ef", 
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

You can pass in an optional `model_name` argument, which lets you choose which OpenAI embeddings model to use. By default, Chroma uses `text-embedding-ada-002`. You can see a list of all available models [here](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings).

### Run with Azure

To use the OpenAI embedding models on other platforms such as Azure, you can use the `api_base` and `api_type` parameters: 
```python
openai_ef = embedding_functions.OpenAIEmbeddingFunction(
                api_key="YOUR_API_KEY",
                api_base="YOUR_API_BASE_PATH",
                api_type="azure",
                api_version="YOUR_API_VERSION",
                model_name="text-embedding-ada-002"
            )
```