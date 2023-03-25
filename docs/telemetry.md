---
sidebar_position: 8
title: "📏 Telemetry"
---

# 📏 Telemetry

Chroma contains a telemetry feature that collects **anonymous** usage information.

## **Why?**

We use this information to help us understand how Chroma is used, to help us prioritize work on new features and bug fixes, and to help us improve Chroma’s performance and stability.

## **Opting out**

Set `anonymized_telemetry` in your clients settings to `false` to opt out of telemetry.

```python
from chromadb.config import Settings
client = chromadb.Client(Settings(anonymized_telemetry=False))
```

## **What do you track?**

We will only track usage details that help us make product decisions, specifically:

- Chroma version and environment
- The Collection commands `add` or `delete`. We only track the anonymized uuid of a collection, not the name.

We **do not** collect personally-identifiable or sensitive information, such as: usernames, hostnames, file names, environment variables, or hostnames of systems being tested.

## **Where is telemetry information stored?**

We use **[Posthog](https://posthog.com/)** to store and visualize telemetry data.

> Posthog is an open source platform for product analytics. Learn more about Posthog on **[posthog.com](https://posthog.com/)** or **[github.com/posthog](https://github.com/posthog/posthog)**