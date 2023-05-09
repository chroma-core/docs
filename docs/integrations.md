---
sidebar_position: 7
---

# 🔌 Integrations

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

---

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

## 🦜️🔗 Langchain

- [LangChain + Chroma](https://blog.langchain.dev/langchain-chroma/) on the LangChain blog
- [Harrison's `chroma-langchain` demo repo](https://github.com/hwchase17/chroma-langchain)
  - [question answering over documents](https://github.com/hwchase17/chroma-langchain/blob/master/qa.ipynb) - ([Replit version](https://replit.com/@swyx/LangChainChromaStarter#main.py))
  - [to use Chroma as a persistent database](https://github.com/hwchase17/chroma-langchain/blob/master/persistent-qa.ipynb)
- Tutorials
  - [Chroma and LangChain tutorial](https://github.com/grumpyp/chroma-langchain-tutorial) - The demo showcases how to pull data from the English Wikipedia using their API. The project also demonstrates how to vectorize data in chunks and get embeddings using OpenAI embeddings model.
  - [Create a Voice-based ChatGPT Clone That Can Search on the Internet and local files](https://betterprogramming.pub/how-to-create-a-voice-based-chatgpt-clone-that-can-search-on-the-internet-24d7f570ea8)
- [LangChain's Chroma Documentation](https://langchain.readthedocs.io/en/latest/reference/modules/vectorstore.html?highlight=chroma#langchain.vectorstores.Chroma)

## 🦙 LlamaIndex

> _formerly known as GPT-index_

- `LlamaIndex` [Vector Store page](https://gpt-index.readthedocs.io/en/latest/how_to/integrations/vector_stores.html)
- Demo: https://github.com/jerryjliu/llama_index/blob/main/examples/vector_indices/ChromaIndexDemo.ipynb
- [Chroma Loader on Llamahub](https://llamahub.ai/l/chroma)

</TabItem>
<TabItem value="js" label="JavaScript">

## 🦜️🔗 LangchainJS

Here is an [example in LangChainJS](https://github.com/hwchase17/langchainjs/blob/main/examples/src/chains/chat_vector_db_chroma.ts)

```javascript
import { OpenAI } from 'langchain/llms';
import { ChatVectorDBQAChain } from 'langchain/chains';
import { Chroma } from 'langchain/vectorstores';
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import * as fs from 'fs';

// to run this first run chroma's docker-container with `docker-compose up -d --build`

export const run = async () => {
  /* Initialize the LLM to use to answer the question */
  const model = new OpenAI();
  /* Load in the file we want to do question answering over */
  const text = fs.readFileSync('state_of_the_union.txt', 'utf8');
  /* Split the text into chunks */
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);
  /* Create the vectorstore */
  const vectorStore = await Chroma.fromDocuments(docs, new OpenAIEmbeddings(), {
    collectionName: 'state_of_the_union',
  });
  /* Create the chain */
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever()
  );
  /* Ask it a question */
  const question = 'What did the president say about Justice Breyer?';
  const res = await chain.call({ question, chat_history: [] });
  console.log(res);
};
```

</TabItem>

</Tabs>
