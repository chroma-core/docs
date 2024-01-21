---
---

# Amazon Bedrock

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>


Chroma provides a convinient wrapper for [Amazon Bedrock](https://aws.amazon.com/bedrock/) embedding API. This embedding function runs remotely on Amazon's servers, and requires an Amazon client information.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

To use Amazon Bedrock embedding API, you must have `boto3` Python package installed.

```sh
pip install boto3
```

To pass AWS credential, create an instance of `boto3.Session` with your AWS credentials.

Here is the example:

```python
import boto3
import chromadb.utils.embedding_functions as embedding_functions

session = boto3.Session(
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
    region_name=region_name,
)
bedrock = embedding_functions.AmazonBedrockEmbeddingFunction(session=session)
bedrock(["document1","document2"])
```

By default, the embedding function uses the `amazon.titan-embed-text-v1` for the model, but you can specify a different model name with `model_name` parameter. For example:

```python
bedrock = embedding_functions.AmazonBedrockEmbeddingFunction(
    session=session, model_name="cohere.embed-multilingual-v3")
bedrock(["こんにちは", "你们好"])
```

</TabItem>
<TabItem value="js" label="JavaScript">

To use Amazon Bedrock embedding API, you must have `@aws-sdk/client-bedrock-runtime` installed.

You can pass AWS credentials to the constructor of `AmazonBedrockEmbeddingFunction` like this:

```javascript
import  { AmazonBedrockEmbeddingFunction } from 'chromadb';

const ef = new AmazonBedrockEmbeddingFunction({
    config: {
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
        region: "us-east-1" // Default region. You can change it to your region.
    },
})

// use directly
const embeddings = await ef.generate(["foo"])

// pass documents to query for .add and .query
const collection = await client.createCollection({name: "name", embeddingFunction: ef})
const collection = await client.getCollection({name: "name", embeddingFunction: ef})
```

If you want to use other credentials, you need to install `@aws-sdk/credential-providers`.

See [AWS SDK for JavaScript v3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials.html) for more information.

Here is the example using SSO credentials:

```javascript
import  { AmazonBedrockEmbeddingFunction } from 'chromadb';
import { fromSSO } = from '@aws-sdk/credential-providers';

const c = await fromSSO({profile: "my-profile"})

const ef = new AmazonBedrockEmbeddingFunction({
    config: {
        credentials: c,
        region: "us-east-1"
    },
})
```

</TabItem>
</Tabs>
