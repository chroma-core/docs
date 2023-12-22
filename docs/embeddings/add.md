---
title: ➕ Add
---

New embeddings integrations help Chroma users build better applications, faster! 

### Process

To land a new embedding integration, you will want to add the integrations to the Python and JS clients. 
- [Python embedding functions](https://github.com/chroma-core/chroma/blob/12785d71ea476ef3cbd28b419e7807bf7f2129d3/chromadb/utils/embedding_functions.py#L4)
- [JS embedding functions](https://github.com/chroma-core/chroma/tree/main/clients/js/src/embeddings)

We will accept embedding functions with just one or the other in some circumstances, but we really like to keep parity between them.

The process is:
1. Please open a new PR in the [Chroma Repo](https://github.com/chroma-core/chroma). 
2. Please open a new PR in the [Docs Repo](https://github.com/chroma-core/docs).
3. Chroma will approve and land the new embedding functions and cut a new Python/JS release
4. The docs PR will merge and be deployed

### Embedding Page

We strongly encourage having the following sections:
- Overview
- Info table on available models and their details
- Simple getting-started usage for Python and JS
- Advanced usage section with examples and links to other resources

The [OpenAI](/embeddings/openai) integration is a great reference! 

## Integration Overview and Sidebar

You will also want to add your embedding functions to the embeddings overview page and sidebar.

### Overview page

Add your embedding function to the list here: https://github.com/chroma-core/docs/blob/main/docs/embeddings/index.md

### Sidebar

Add your embedding function to the sidebar: https://github.com/chroma-core/docs/blob/main/sidebars.js