[chromadb](../README.md) / [Exports](../modules.md) / ChromaClient

# Class: ChromaClient

Represents a ChromaClient for managing collections of embeddings.

## Table of contents

### Constructors

- [constructor](ChromaClient.md#constructor)

### Properties

- [api](ChromaClient.md#api)

### Methods

- [createCollection](ChromaClient.md#createcollection)
- [deleteCollection](ChromaClient.md#deletecollection)
- [getCollection](ChromaClient.md#getcollection)
- [getOrCreateCollection](ChromaClient.md#getorcreatecollection)
- [heartbeat](ChromaClient.md#heartbeat)
- [listCollections](ChromaClient.md#listcollections)
- [persist](ChromaClient.md#persist)
- [reset](ChromaClient.md#reset)
- [version](ChromaClient.md#version)

## Constructors

### constructor

• **new ChromaClient**(`basePath?`)

Creates a new ChromaClient instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basePath?` | `string` | (Optional) The base URL of the Chroma API. Default is "http://localhost:8000". |

#### Defined in

[index.ts:539](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L539)

## Properties

### api

• `Private` **api**: `ApiApi`

#### Defined in

[index.ts:533](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L533)

## Methods

### createCollection

▸ **createCollection**(`name`, `metadata?`, `embeddingFunction?`): `Promise`<[`Collection`](Collection.md)\>

Creates a new collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the new collection. |
| `metadata?` | `object` | (Optional) An object containing metadata for the new collection. |
| `embeddingFunction?` | `CallableFunction` | (Optional) A callable function for generating embeddings. |

#### Returns

`Promise`<[`Collection`](Collection.md)\>

A Promise that resolves to the created Collection instance.

#### Defined in

[index.ts:577](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L577)

___

### deleteCollection

▸ **deleteCollection**(`name`): `Promise`<`any`\>

Deletes a collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the collection to be deleted. |

#### Returns

`Promise`<`any`\>

A Promise that resolves to the result of the deletion operation.

#### Defined in

[index.ts:660](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L660)

___

### getCollection

▸ **getCollection**(`name`, `embeddingFunction?`): `Promise`<[`Collection`](Collection.md)\>

Retrieves an existing collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the collection to be retrieved. |
| `embeddingFunction?` | `CallableFunction` | (Optional) A callable function for generating embeddings. |

#### Returns

`Promise`<[`Collection`](Collection.md)\>

A Collection instance representing the retrieved collection.

#### Defined in

[index.ts:638](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L638)

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

#### Defined in

[index.ts:597](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L597)

___

### heartbeat

▸ **heartbeat**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:560](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L560)

___

### listCollections

▸ **listCollections**(): `Promise`<`any`\>

Lists all collections.

#### Returns

`Promise`<`any`\>

A Promise that resolves to an array of collections.

#### Defined in

[index.ts:627](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L627)

___

### persist

▸ **persist**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:566](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L566)

___

### reset

▸ **reset**(): `Promise`<`Reset200Response`\>

Resets the ChromaClient state.

#### Returns

`Promise`<`Reset200Response`\>

A Promise that resolves when the ChromaClient state is reset.

#### Defined in

[index.ts:551](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L551)

___

### version

▸ **version**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:555](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L555)
