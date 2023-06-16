---
sidebar_position: 10
title: "🔍 Troubleshooting"
---

# 🔍 Troubleshooting

This page is a list of common gotchas or issues and how to fix them! 

If you don't see your problem listed here, please also search the [Github Issues](https://github.com/chroma-core/chroma/issues).


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

