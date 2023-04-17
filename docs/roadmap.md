---
sidebar_position: 9
title: "🛣️ Roadmap"
---

# 🛣️ Roadmap

> Last updated: `April 16, 2023`

Join our weekly [Community Calls](http://google.com/)!

**The goal of this doc is to align core and community efforts for the project.**

## Core Team Current Focus

Try to steer clear of contributing to these unless you have talked to us!

### ⚔️ Robust Test Suite

The core team is implementing a [hypothesis-based](https://hypothesis.readthedocs.io/en/latest/) testing suite to battle-harden Chroma’s APIs. This is a big undertaking and has taken over a week. We’re investing the time in this now to enable high development velocity in the near future and to be able to accept community contributions without fear of regressions or bugs.

## Core Team Near-term Focus

Not an exhaustive list, but these are some of the core team’s biggest priorities over the coming few months.

- 🕸️ Replacing Clickhouse with a custom Distributed System
- 🌩️ Standing up that distributed system as a managed service (aka "Hosted Chroma" - [sign up for waitlist](https://airtable.com/shrOAiDUtS2ILy5vZ)!)

## Community Contributions Sought

### Example Templates

We can always use [more integrations](https://docs.trychroma.com/integrations) with the rest of the AI ecosystem. Please let us know if you're working on one and need help!

Other great starting points for Chroma (please send PRs for more):
- [Google Colab](https://colab.research.google.com/drive/1QEzFyqnoFxq7LUGyP1vzR4iLt9PpCDXv?usp=sharing)
- [Replit Template](https://replit.com/@swyx/BasicChromaStarter?v=1)

For those integrations we do have, like `LangChain` and `LlamaIndex`, we do always want more tutorials, demos, workshops, videos, and podcasts.

### Example Datasets

It doesn’t make sense for developers to embed the same information over and over again with the same embedding model.

We'd like suggestions for:

- "small"
- "medium"
- "large"

datasets for people to stress test Chroma in a variety of scenarios.

### Embeddings Comparison

Chroma does ship with Sentence Transformers by default for embeddings, but we are otherwise unopinionated about what embeddings you use. Having a library of information that has been embedded with many models, alongside example query sets would make it much easier for empirical work to be done on the effectiveness of various models across different domains.

- [Preliminary reading on Embeddings](https://towardsdatascience.com/neural-network-embeddings-explained-4d028e6f0526?gi=ee46baab0d8f)
- [Huggingface Benchmark of a bunch of Embeddings](https://huggingface.co/blog/mteb)
- [notable issues with GPT3 Embeddings](https://twitter.com/Nils_Reimers/status/1487014195568775173) and alternatives to consider


### Experimental Algorithms

If you have a research background, please consider adding to our `ExperimentalAPI`s. For example:

- Projections (t-sne, UMAP, the new hotness, the one you just wrote) and Lightweight visualization
- Clustering (HDBSCAN, PCA)
- Deduplication
- Multimodal (CLIP)
- Fine-tuning manifold with human feedback [eg](https://github.com/openai/openai-cookbook/blob/main/examples/Customizing_embeddings.ipynb)
- Expanded vector search (MMR, Polytope)
- Your research

### Additional Client SDKs

We will be happy to work with people maintaining additional client SDKs as part of the community. Specifically: 

- Ruby 
- Clojure 
- Elixir

Please [reach out](https://discord.gg/MMeYNTmh3x) and talk to us before you get too far in your projects so that we can offer technical guidance/align on roadmap.