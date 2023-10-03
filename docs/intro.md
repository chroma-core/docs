---
sidebar_position: 0
slug: /
id: my-home-doc
title: 🏡 Home
hide_title: true
---

# Chroma

**Chroma is the open-source embedding database**. Chroma makes it easy to build LLM apps by making knowledge, facts, and skills pluggable for LLMs.

[![Discord](https://img.shields.io/discord/1073293645303795742)](https://discord.gg/MMeYNTmh3x)
[![GitHub stars](https://img.shields.io/github/stars/chroma-core/chroma.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/chroma-core/chroma/stargazers/)


<img src="/img/hrm4.svg" />

<br/><br/>

Chroma gives you the tools to:

- store embeddings and their metadata
- embed documents and queries
- search embeddings

Chroma prioritizes:

- simplicity and developer productivity
- analysis on top of search
- it also happens to be very quick

Chroma consists of a `Python` client SDK, `JavaScript/TypeScript` client SDK and a server application. Check out the [Colab demo](https://colab.research.google.com/drive/1QEzFyqnoFxq7LUGyP1vzR4iLt9PpCDXv?usp=sharing).(yes, it can run in a notebook 😄)

Chroma is licensed under [Apache 2.0](https://github.com/chroma-core/chroma/blob/main/LICENSE)

### Python
In Python, Chroma can run `in-memory` or in `client/server` (in alpha) mode.
```bash
pip install chromadb
```

### JavaScript
In JavaScript, Chroma runs in `client/server` mode and talks to a Python backend.
```bash
npm install --save chromadb # yarn add chromadb
```


Continue with the full [getting started guide](./getting-started.md).

[🔑 Getting started](./getting-started.md)<br/>
[🧪 Usage Guide](./usage-guide.md)<br/>
[🧬 Embeddings](./embeddings.md)<br />
[📄 API Reference](./api-reference.md)<br/>
[👽 About](./about.md)<br/>

[💬 Join Community Discord](https://discord.gg/MMeYNTmh3x) <br/>
[@trychroma](https://twitter.com/trychroma) 


***

### Language Support

<div class="special_table"></div>

|              | in-memory | client |
|--------------|-----------|---------------|
| Python       | ✅        | ✅ (by Chroma)           |
| Javascript   | ➖        | ✅ (by Chroma)          |
| Ruby   | ➖        | ✅ [from @mariochavez](https://github.com/mariochavez/chroma)           |
| Java | ➖  | ✅ [from @t_azarov](https://github.com/amikos-tech/chromadb-java-client) |
| Go | ➖  | ✅ [from @t_azarov](https://github.com/amikos-tech/chroma-go) |
| C#   | ➖        | ✅ [from @microsoft](https://github.com/microsoft/semantic-kernel/tree/main/dotnet/src/Connectors/Connectors.Memory.Chroma)       |
| Rust | ➖ | ✅ [from @Anush008](https://crates.io/crates/chromadb) |
| Elixir | ➖ | ✅ [from @3zcurdia](https://hex.pm/packages/chroma/) |
| Dart | ➖ | ✅ [from @davidmigloz](https://pub.dev/packages/chromadb) |
| Other?       | ❓    | ❓            |

<br/>

We welcome contributions for other languages! 

Learn more on the [Community Discord](https://discord.gg/MMeYNTmh3x). 
