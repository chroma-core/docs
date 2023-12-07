---
slug: /integrations/memgpt
title: 📚🦙 MemGPT
---

MemGPT enables LLMs to manage their own memory and overcome limited context windows. You can use MemGPT to create perpetual chatbots that learn about you and modify their own personalities over time. You can connect MemGPT to your own local filesystems and databases, as well as connect MemGPT to your own tools and APIs. The MemGPT + Chroma integration allows you to back MemGPT's memory system with Chroma.

## MemGPT + Chroma

To enable the Chroma storage backend in MemGPT, install the dependencies with: 
```
pip install `pymemgpt[chroma]`
```
You can configure Chroma with both the HTTP and persistent storage client via `memgpt configure`. You will need to specify either a persistent storage path or host/port dependending on your client choice. The example below shows how to configure Chroma with local persistent storage: 
```
? Select LLM inference provider: openai
? Override default endpoint: https://api.openai.com/v1
? Select default model (recommended: gpt-4): gpt-4
? Select embedding provider: openai
? Select default preset: memgpt_chat
? Select default persona: sam_pov
? Select default human: cs_phd
? Select storage backend for archival data: chroma
? Select chroma backend: persistent
? Enter persistent storage location: /path/to/your/.memgpt/config/chroma
```
