---
sidebar_position: 9
title: "🔍 Troubleshooting"
---

# 🔍 Troubleshooting

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Occasionally users have technical issues installing or using Chroma and this page serves as a manifest of those.

## Platform Specific Build Issues


<Tabs queryString groupId="env">
<TabItem value="windows" label="Windows">

*Blank for now*

</TabItem>
<TabItem value="mac" label="Mac">

*Blank for now*

</TabItem>
<TabItem value="linux" label="Linux">

### Ubuntu 20.04, Python 3.9

`Hnswlib` fails to build on `pip install`

Error:
```
No such file or Directory
#include <Python.h>
```

Solution: `sudo apt install libpython3.9-dev`

</TabItem>

</Tabs>


## Python Specific Build Issues

1. Chroma currently depends on `sentence-transformers` as a default embedding model. This however means that Python 3.11 is not supported. https://github.com/chroma-core/chroma/issues/163