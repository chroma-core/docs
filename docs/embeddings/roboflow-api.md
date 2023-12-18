---
---

# Roboflow

You can use [Roboflow Inference](https://inference.roboflow.com) with Chroma to calculate multi-modal text and image embeddings with CLIP. through the `RoboflowEmbeddingFunction` class. Inference can be used through the Roboflow cloud, or run on your hardware.

## Roboflow Cloud Inference

To run Inference through the Roboflow cloud, you will need an API key. [Learn how to retrieve a Roboflow API key](https://docs.roboflow.com/api-reference/authentication#retrieve-an-api-key). 

You can pass it directly on creation of the `RoboflowEmbeddingFunction`:

```python
from chromadb.utils.embedding_functions import RoboflowEmbeddingFunction

roboflow_ef = RoboflowEmbeddingFunction(api_key=API_KEY)
```

Or else you can set it as an environment variable:

```bash
export ROBOFLOW_API_KEY=YOUR_API_KEY
```

Then, you can create the `RoboflowEmbeddingFunction` without passing the API key:

```python
from chromadb.utils.embedding_functions import RoboflowEmbeddingFunction

roboflow_ef = RoboflowEmbeddingFunction()
```

## Local Inference

TODO: add instructions for running inference locally

For a full tutorial on using Roboflow Inference with Chroma, refer to the [Roboflow Chroma integration tutorial](https://github.com/chroma-core/chroma/blob/main/examples/use_with/roboflow/embeddings.ipynb). 