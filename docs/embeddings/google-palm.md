---
---

# Google PaLM

[Google PaLM APIs](https://developers.googleblog.com/2023/03/announcing-palm-api-and-makersuite.html) are currently in private preview, but if you are part of this preview, you can use them with Chroma via the `GooglePalmEmbeddingFunction`.

To use the PaLM embedding API, you must have `google.generativeai` Python package installed and have the API key. To use:

```python
import chromadb.utils.embedding_functions as embedding_functions
palm_embedding = embedding_functions.GooglePalmEmbeddingFunction(
    api_key=api_key, model_name=model_name)

```
