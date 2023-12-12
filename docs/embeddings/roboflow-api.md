---
---

# Roboflow

You can use [Roboflow Inference](https://inference.roboflow.com) with Chroma to calculate text and image embeddings with CLIP. through the `RoboflowEmbeddingFunction` class. Inference can be used through the Roboflow cloud, or run on your hardware.

For a full tutorial on using Roboflow Inference with Chroma, refer to the [Roboflow Chroma integration tutorial](https://github.com/chroma-core/chroma/blob/main/examples/use_with/roboflow/embeddings.ipynb). This tutorial shows how to use Inference in the cloud.

To run Inference through the Roboflow cloud, you will need an API key. [Learn how to retrieve a Roboflow API key](https://docs.roboflow.com/api-reference/authentication#retrieve-an-api-key). Once you have an API key, export it into your environment in a variable called `API_KEY`:

```bash
export API_KEY=""
```

## Embed an Image

To embed an image, you will need to install `opencv-python` with pip. Then, use the following code to embed an image:

```python
from chromadb.utils.embedding_functions import RoboflowEmbeddingFunction
import cv2

embeddings = ef([cv2.imread(image)])
```

This will return a list of embeddings for each provided image.

## Embed Text

To embed a text query, use:

```python
from chromadb.utils.embedding_functions import RoboflowEmbeddingFunction

query = ef(["baseball"])
```