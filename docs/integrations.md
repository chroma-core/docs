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

***

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

## 🦜️🔗 Langchain - python

Learn more at [LangChain's Chroma Documentation](https://langchain.readthedocs.io/en/latest/reference/modules/vectorstore.html?highlight=chroma#langchain.vectorstores.Chroma)

## 🦙 GPT-index / LlamaIndex

Learn more on `GPT-index`/`LlamaIndex` [Vector Store page](https://gpt-index.readthedocs.io/en/latest/how_to/integrations/vector_stores.html).



</TabItem>
<TabItem value="js" label="JavaScript">


## 🦜️🔗 LangchainJS

Here is an [example in LangChainJS](https://github.com/hwchase17/langchainjs/blob/main/examples/src/chains/chat_vector_db_chroma.ts)

```javascript
import { OpenAI } from "langchain/llms";
import { ChatVectorDBQAChain } from "langchain/chains";
import { Chroma } from "langchain/vectorstores";
import { OpenAIEmbeddings } from "langchain/embeddings";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as fs from "fs";

// to run this first run chroma's docker-container with `docker-compose up -d --build`

export const run = async () => {
  /* Initialize the LLM to use to answer the question */
  const model = new OpenAI();
  /* Load in the file we want to do question answering over */
  const text = fs.readFileSync("state_of_the_union.txt", "utf8");
  /* Split the text into chunks */
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = textSplitter.createDocuments([text]);
  /* Create the vectorstore */
  const vectorStore = await Chroma.fromDocuments(
    docs,
    new OpenAIEmbeddings(),
    "state_of_the_union"
  );
  /* Create the chain */
  const chain = ChatVectorDBQAChain.fromLLM(model, vectorStore);
  /* Ask it a question */
  const question = "What did the president say about Justice Breyer?";
  const res = await chain.call({ question, chat_history: [] });
  console.log(res);
};
```


</TabItem>

</Tabs>


