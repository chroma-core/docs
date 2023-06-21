---
sidebar_position: 10
title: "🔍 Troubleshooting"
---

# 🔍 Troubleshooting

This page is a list of common gotchas or issues and how to fix them.

If you don't see your problem listed here, please also search the [Github Issues](https://github.com/chroma-core/chroma/issues).


## Using .get or .query, embeddings say `None`

This is actually not an error. Embeddings are quite large and heavy to send back. Most application don't use the underlying embeddings and so, by default, chroma does not send them back. 

To send them back: add `include=["embeddings", "documents", "metadatas", "distances"]` to your query to return all information.

For example:
```python
results = collection.query(
    query_texts="hello",
    n_results=1,
    include=["embeddings", "documents", "metadatas", "distances"],
)
```

:::note
We may change `None` to something else to more clearly communicate why they were not returned.
:::


## Your index resets back to just a few number of records

Users report that they are using Chroma, happily adding data, and then they go to check the `count()` or `query()` and only a single item or a very small fraction of their data is in Chroma. 

Chroma has 3 modes: `in-memory`, `single-node`, and `distributed` (coming soon). The `in-memory` product should treated as a **singleton**. 

Here is what commonly happens. 

1. Create a new in-memory Chroma, #1 saving to `./db`, and add 10 items.
2. Create another new in-memory Chroma, #2 saving to `./db`, and add 10 more items. Call this B.
3. Exit the program
4. Chroma uses [atExit](https://github.com/chroma-core/chroma/blob/d98be4d0bfb760155d9f85c9012952ef459c10a6/chromadb/db/duckdb.py#L447) to autosave your data from #1 and #2
5. #2 gets saved first, and then #1 (reverse order), but when #1 gets saved it only "knows" about it's 10 records and stomps what things #2 had added.

`Solution`: Don't keep multiple `in-memory` clients alive at once. 

:::note
We may add extra logic to warn if multiple in-memory clients are used with the same path.
:::


## Build error when running `pip install chromadb`

If you encounter an error like this during setup
```
Failed to build hnswlib
ERROR: Could not build wheels for hnswlib, which is required to install pyproject.toml-based projects
```

Try these few tips from the [community](https://github.com/chroma-core/chroma/issues/221):

1. If you get the error: `clang: error: the clang compiler does not support '-march=native'`, set this ENV variable, `export HNSWLIB_NO_NATIVE=1` 
2. If on Mac, install/update xcode dev tools, `xcode-select --install`
3. If on Windows, try [these steps](https://github.com/chroma-core/chroma/issues/250#issuecomment-1540934224)