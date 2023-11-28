---
---

# Roboflow

With [Roboflow Inference](https://inference.roboflow.com), you can calculate image embeddings using CLIP, a popular multimodal embedding model. You can then store these embeddings in Chroma for use in your application.

In this guide, we are going to discuss how to load image embeddings into Chroma. We will discuss:

1. How to set up Roboflow Inference
2. How to create a Chroma vector database
3. How to calculate CLIP embeddings with Inference
4. How to run a search query with Chroma

Without further ado, let’s get started!

## What is Roboflow Inference?

[Roboflow Inference](https://inference.roboflow.com) is a scalable server through which you can run fine-tuned object detection, segmentation, and classification models, as well as popular foundation models such as CLIP.

Inference handles all of the complexity associated with running vision models, from managing dependencies to maintaining your environment.

Inference is trusted by enterprises around the world to manage vision models, with the hosted version powering millions of API calls each month.

### Step #1: Set Up Roboflow Inference

Inference runs in Docker and provides a HTTP interface through which to retrieve predictions.

We will use Inference to calculate CLIP embeddings for our application.

There are two ways to use Inference:

1. On your device
2. Through the Inference API hosted by Roboflow

We will talk through both options, but we’ll start by showing how to install Inference on your own device. This is ideal if you want to deploy a model on your own infrastructure.

To install inference, you will need Docker on your machine. Learn how to install Docker from the official Docker installation instructions. With Docker installed, you can install Inference with pip:

```
pip install inference-cli
```

Run the following command to start an Inference server:

```
inference server start
```

A message will appear that notes the server is starting. Inference will start running on `http://localhost:9001`.

### Step #2: Create a Chroma Vector Database

To load and save image embeddings into Chroma, we first need images to embed. In this guide, we are going to use the COCO 128 dataset, a collection of 128 images from the Microsoft COCO dataset. This dataset is available on Roboflow Universe, a community that has shared more than 250,000 public computer vision datasets.

To download the dataset, visit the COCO 128 web page, click “Download Dataset” and save the dataset as a ZIP file following the on-screen instructions:

![COCO 128 dataset](https://media.roboflow.com/coco128.png)

We are going to use the images in the `train/images` folder of the dataset.

Now that we have a dataset ready, we can create a vector database and start loading embeddings.

Install the Chroma Python client with the following command:

```
pip install chromadb
```

Then, create a new Python file and add the following code:

```python
import chromadb
import os
from chromadb.utils.embedding_functions import RoboflowEmbeddingFunction
import uuid

client = chromadb.PersistentClient(path="database")

collection = client.create_collection(name="images", metadata={"hnsw:space": "cosine"})

IMAGE_DIR = "COCO128/train/images/"
SERVER_URL = "https://infer.roboflow.com"
API_KEY = “”

ef = RoboflowEmbeddingFunction(API_KEY, api_url = SERVER_URL)

documents = [os.path.join(IMAGE_DIR, img) for img in os.listdir(IMAGE_DIR)]
embeddings = ef(images = [img for img in documents])
ids = [str(uuid.uuid4()) for _ in range(len(documents))]

print(embeddings)

collection.add(
    embeddings=embeddings,
    documents=documents,
    ids=ids,
)
```

In this code snippet, we create a new Chroma database called `images`. Our database will use cosine similarity for embedding comparisons.

We calculate CLIP embeddings for all images in the `COCO128/train/images` folder using Inference. We save the embeddings in Chroma using the `collection.add()` method.

We store the file names associated with each image in the `documents` variable, and embeddings in `embeddings`. 

If you want to use the hosted version of Roboflow Inference to calculate embeddings, replace the `SERVER_URL` value with `https://infer.roboflow.com`. We use the RoboflowEmbeddingFunction, built in to Chroma, to interact with Inference.

Run the script above to calculate embeddings for a folder of images and save them in your database.

We now have a vector database that contains some embeddings. Great! Let’s move on to the fun part: running a search query on our database.

### Step #3: Run a Search Query

To run a search query, we need a text embedding of a query. For example, if we want to find vegetables in our collection of 128 images from the COCO dataset, we need to have a text embedding for the search phrase “baseball”.

To calculate a text embedding, we can use Inference through the embedding function we defined earlier:

```python
query = ef("baseball")

results = collection.query(
    query_embeddings=embeddings,
    n_results=3
)

top_result = results["documents"][0][0]

print(top_result)
```

Let’s run our code and see what happens:

```
COCO128/train/images/000000000488_jpg.rf.c01187aceb8a49b901abe79739d6acdf.jpg
```

Our code returns the name of the image with the most similar embedding to the embedding of our text query. Here is the contents of the image with the vector most closely related to the search query "baseball":

![Baseball](https://media.roboflow.com/baseball.jpg)

The top result was an image that contains a game of baseball. Chroma successfully returned an image that matched our prompt.