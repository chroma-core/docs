---
---

# Universal Sentence Encoder

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>


<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">
Chroma also provides a convenient wrapper around [Universal Sentence Encoder](https://research.google.com/pubs/archive/46808.pdf). This embedding function uses `https://tfhub.dev/google/universal-sentence-encoder/4` available on Tensorflow Hub.

This embedding function relies on the `tensforflow_hub` python package, which you can install with `pip install tensforflow_hub`.

```python
import chromadb.utils.embedding_functions as embedding_functions
huggingface_ef = embedding_functions.UniversalSentenceEncoderEmbeddingFunction()
```

You can pass in an optional `model_name` argument, which lets you choose which model to use. By default, Chroma uses `[https://tfhub.dev/google/universal-sentence-encoder/4](https://tfhub.dev/google/universal-sentence-encoder/4)`.

</TabItem>
<TabItem value="js" label="JavaScript">
  Support for [Universal Sentence Encoder](https://research.google.com/pubs/archive/46808.pdf) embedding function is not implemented yet. Feel free to contribute by following the doc: [Custom Embedding Functions](https://docs.trychroma.com/embeddings?lang=js)
</TabItem>
</Tabs>
