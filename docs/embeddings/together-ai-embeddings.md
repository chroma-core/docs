---
---

# Together Embeddings Endpoint.

Together AI Recently launched [embeddings](https://docs.together.ai/docs/embeddings-rest) inference endpoints, you can use them with Chroma using `TogetherAIEmbeddingFunction`.

A list of available embedding models can be seen [here](https://docs.together.ai/docs/embedding-models)
You can get your API Keys from [here](https://api.together.xyz/settings/api-keys)

```python
import chromadb.utils.embedding_functions as embedding_functions
together_embedding = embedding_functions.TogetherAIEmbeddingFunction(
    api_key=api_key, model=model_name)

```
