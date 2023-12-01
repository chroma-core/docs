---
---

# Jina AI with PEFT and GPU acceleration

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

This component provides a convenient wrapper around JinaAI's alpine base embeddings model or as well as the optional of additional PEFT config. This embedding function runs completely local, and does not require an API key. Ask @Luke on discord if you need help with PEFT on your data.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

This embedding function relies on the `peft`, `torch` & `transformers` python package, which you can install with `pip install transformers torch peft`.
for CPU inference
```python
chroma_embedding_fnc = embedding_functions.JinaAIEmbeddingsFunction(device = "cpu")
```
for GPU inference
```python
chroma_embedding_fnc = embedding_functions.JinaAIEmbeddingsFunction(device = "cuda")
chroma_collection = chroma_client.get_or_create_collection(
    name="test_collection",
    embedding_function=chroma_embedding_fnc,
    metadata={
        "hnsw:space": "cosine",  # "l2", "ip, "or "cosine". The default is "l2".
        "hnsw:construction_ef": 10240,  # Number of docs # https://github.com/nmslib/hnswlib
        "hnsw:M": 640,  # Docs retrieved
    },
)
chroma_collection.add(
    documents=[
        "Lisa Su: DoB 06/07/1987 -- President and Chief Executive Officer Yeah. Sure, Joe. So, we've been engaging broadly with the customer set. I think in the last earnings call, we said that our engagements had increased seven times.",
        "Jensen Huang: SSN 456-345-234-345 -- President and Chief Executive Officer The world has something along the lines of about $1 trillion worth of data centers installed in the cloud and enterprise and otherwise.",
        "Jensen Huang: DoB 12/05/67 -- President and Chief Executive Officer The world has something along the lines of about $1 trillion worth of data centers installed in the cloud and enterprise and otherwise.",
        "Elon Musk: Date of birth 12th of July '56 is the CEO of Tesla and SpaceX and one of the co-founders of PayPal.",
    ],
    metadatas=[
        {"chapter": "3", "verse": "16"},
        {"chapter": "3", "verse": "5"},
        {"chapter": "29", "verse": "11"},
        {"chapter": "29", "verse": "11"},
    ],
    ids=["id1", "id2", "id3", "id4"],
)
query_result = chroma_collection.query(
    query_texts=[
        "Lisa Su'S Date of Birth",
        "Elon Musk's Date of Birth",
        "Jensen Huang's Date of Birth",
    ],
    n_results=10,
    include=["distances"]
    # where={"metadata_field": "is_equal_to_this"},
    # where_document={"$contains":"search_string"}
)
print(query_result)
```
You can pass in an optional `model_name` argument, which lets you choose which Jina model to use. By default, Chroma uses `jina-embedding-v2-base-en`.

</TabItem>
<TabItem value="js" label="JavaScript">
</TabItem>
</Tabs>
