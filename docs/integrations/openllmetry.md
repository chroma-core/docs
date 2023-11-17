---
slug: /integrations/llama-index
title: 🔭 OpenLLMetry
---

## 🔭 OpenLLMetry

OpenLLMetry provides observability for systems using Chroma. It allows tracing calls to Chroma, OpenAI, and other services.
It gives visibility to query and index calls as well as LLM prompts and completions.
For more information on how to use OpenLLMetry, see the [OpenLLMetry docs](https://www.traceloop.com/openllmetry/docs).

<img src="/img/openllmetry.png" />

### Example

Install OpenLLMetry SDK by running:

```bash
pip install traceloop-sdk
```

Then, initialize the SDK in your application:

```python
from traceloop.sdk import Traceloop

Traceloop.init()
```
