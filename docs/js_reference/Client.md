---
sidebar_label: Client
title: Client
sidebar_position: 1
---

# Class: ChromaClient

## Constructors

### constructor

• **new ChromaClient**(`basePath?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `basePath?` | `string` |

## Methods

### createCollection

▸ **createCollection**(`name`, `metadata?`, `embeddingFunction?`): `Promise`<[`Collection`](Collection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `metadata?` | `object` |
| `embeddingFunction?` | `CallableFunction` |

#### Returns

`Promise`<[`Collection`](Collection.md)\>

___

### deleteCollection

▸ **deleteCollection**(`name`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`any`\>

___

### getCollection

▸ **getCollection**(`name`, `embeddingFunction?`): `Promise`<[`Collection`](Collection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `embeddingFunction?` | `CallableFunction` |

#### Returns

`Promise`<[`Collection`](Collection.md)\>

___

### getOrCreateCollection

▸ **getOrCreateCollection**(`name`, `metadata?`, `embeddingFunction?`): `Promise`<[`Collection`](Collection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `metadata?` | `object` |
| `embeddingFunction?` | `CallableFunction` |

#### Returns

`Promise`<[`Collection`](Collection.md)\>

___

### heartbeat

▸ **heartbeat**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### listCollections

▸ **listCollections**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

___

### reset

▸ **reset**(): `Promise`<`Reset200Response`\>

#### Returns

`Promise`<`Reset200Response`\>

___

### version

▸ **version**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>
