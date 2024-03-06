---
---

# Together Embeddings Endpoint.

Together AI Recently launched [embeddings endpoint](https://docs.together.ai/docs/embeddings-rest) and they offer really cheap yet fast inference endpoints, you can use them with Chroma using `TogetherAIEmbeddingFunction`.

A list of available embedding models can be seen [here](https://docs.together.ai/docs/embedding-models)

```python
import chromadb.utils.embedding_functions as embedding_functions
together_embedding = embedding_functions.TogetherAIEmbeddingFunction(
    api_key=api_key, model=model_name)

```
