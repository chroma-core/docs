---
sidebar_label: Collection
title: Collection
sidebar_position: 2
---

# Class: Collection

## Constructors

### constructor

• **new Collection**(`name`, `id`, `api`, `metadata?`, `embeddingFunction?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `id` | `string` |
| `api` | `ApiApi` |
| `metadata?` | `object` |
| `embeddingFunction?` | `CallableFunction` |

## Properties

### api

• `Private` **api**: `ApiApi`

___

### embeddingFunction

• **embeddingFunction**: `undefined` \| `CallableFunction`

___

### id

• **id**: `string`

___

### metadata

• **metadata**: `undefined` \| `object`

___

### name

• **name**: `string`

## Methods

### add

▸ **add**(`ids`, `embeddings`, `metadatas?`, `documents?`, `increment_index?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ids` | `string` \| `string`[] | `undefined` |
| `embeddings` | `undefined` \| `number`[] \| `number`[][] | `undefined` |
| `metadatas?` | `object` \| `object`[] | `undefined` |
| `documents?` | `string` \| `string`[] | `undefined` |
| `increment_index` | `boolean` | `true` |

#### Returns

`Promise`<`any`\>

___

### count

▸ **count**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### createIndex

▸ **createIndex**(): `Promise`<`CreateIndex200Response`\>

#### Returns

`Promise`<`CreateIndex200Response`\>

___

### delete

▸ **delete**(`ids?`, `where?`, `where_document?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids?` | `string`[] |
| `where?` | `object` |
| `where_document?` | `object` |

#### Returns

`Promise`<`any`\>

___

### get

▸ **get**(`ids?`, `where?`, `limit?`, `offset?`, `include?`, `where_document?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids?` | `string`[] |
| `where?` | `object` |
| `limit?` | `number` |
| `offset?` | `number` |
| `include?` | `IncludeEnum`[] |
| `where_document?` | `object` |

#### Returns

`Promise`<`any`\>

___

### modify

▸ **modify**(`name?`, `metadata?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `metadata?` | `object` |

#### Returns

`Promise`<`any`\>

___

### peek

▸ **peek**(`limit?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `10` |

#### Returns

`Promise`<`any`\>

___

### query

▸ **query**(`query_embeddings`, `n_results?`, `where?`, `query_text?`, `where_document?`, `include?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query_embeddings` | `undefined` \| `number`[] \| `number`[][] | `undefined` |
| `n_results` | `number` | `10` |
| `where?` | `object` | `undefined` |
| `query_text?` | `string` \| `string`[] | `undefined` |
| `where_document?` | `object` | `undefined` |
| `include?` | `IncludeEnum`[] | `undefined` |

#### Returns

`Promise`<`any`\>

___

### setMetadata

▸ `Private` **setMetadata**(`metadata`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `undefined` \| `object` |

#### Returns

`void`

___

### setName

▸ `Private` **setName**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

___

### update

▸ **update**(`ids`, `embeddings?`, `metadatas?`, `documents?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string` \| `string`[] |
| `embeddings?` | `number`[] \| `number`[][] |
| `metadatas?` | `object` \| `object`[] |
| `documents?` | `string` \| `string`[] |

#### Returns

`Promise`<`any`\>

___

### upsert

▸ **upsert**(`ids`, `embeddings`, `metadatas?`, `documents?`, `increment_index?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ids` | `string` \| `string`[] | `undefined` |
| `embeddings` | `undefined` \| `number`[] \| `number`[][] | `undefined` |
| `metadatas?` | `object` \| `object`[] | `undefined` |
| `documents?` | `string` \| `string`[] | `undefined` |
| `increment_index` | `boolean` | `true` |

#### Returns

`Promise`<`any`\>

___

### validate

▸ `Private` **validate**(`require_embeddings_or_documents`, `ids`, `embeddings`, `metadatas?`, `documents?`): `Promise`<(`undefined` \| `object`[] \| (`undefined` \| `string`)[])[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `require_embeddings_or_documents` | `boolean` |
| `ids` | `string` \| `string`[] |
| `embeddings` | `undefined` \| `number`[] \| `number`[][] |
| `metadatas?` | `object` \| `object`[] |
| `documents?` | `string` \| `string`[] |

#### Returns

`Promise`<(`undefined` \| `object`[] \| (`undefined` \| `string`)[])[]\>
