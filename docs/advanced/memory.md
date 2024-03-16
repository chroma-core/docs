---
slug: /advanced/memory
title: 💽 Memory management
---

## Memory management
There are situations where you might need to limit the memory usage of Chroma. By default, Chroma loads the entire queried collection into its in-memory cache. To address this, we have implemented a mechanism to set a memory limit, which Chroma endeavors to adhere to as closely as possible through various cache eviction strategies. Here are some important points to note:
   -  Loading a collection into the cache can introduce some latency, as this process consumes resources.
    - This approach is based on best effort, considering that real-time monitoring of RAM usage per collection is an estimation.

##### Available Cache Strategies
- **Default**: Under this policy, there is no eviction process. Chroma loads all queried collections into memory and retains them until the process is restarted.
- **LRU** (Least Recently Used): In this strategy, Chroma evicts the least recently used collection to free up capacity for the newly queried collection. However,if a collection is larger than the set limit, Chroma will still attempt to load it, evicting other collections if necessary.


#### Setup
Set the environment variable `CHROMA_SEGMENT_CACHE_POLICY=LRU` to enable the LRU caching strategy. Additionally, define the memory limit by setting `CHROMA_MEMORY_LIMIT_BYTES=1000000000`, which restricts the cache to a maximum of 1GB.