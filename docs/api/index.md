---
slug: /api
title: 🔧 API
---

# 🔧 API

## Client APIs

Chroma currently maintains 1st party clients for Python and Javascript. For other clients in other languages, use their repos for documentation.

`Client` - is the object that wraps a connection to a backing Chroma DB

`Collection` - is the object that wraps a collection


<div class="special_table"></div>

|              | Client | Collection |
|--------------|-----------|---------------|
| Python | [Client](/reference/Client) | [Collection](/reference/Collection) |
| Javascript | [Client](/js_reference/Client)   | [Collection](/reference/Collection) |

*** 

## Backend API

Chroma's backend Swagger REST API docs are viewable by running Chroma and navigating to `http://localhost:8000/docs`.

```
pip install chromadb
chroma run
open http://localhost:8000/docs
```
