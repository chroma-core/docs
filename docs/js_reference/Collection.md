[chromadb](../README.md) / [Exports](../modules.md) / Collection

# Class: Collection

Represents a collection of embeddings.

## Table of contents

### Constructors

- [constructor](Collection.md#constructor)

### Properties

- [api](Collection.md#api)
- [embeddingFunction](Collection.md#embeddingfunction)
- [metadata](Collection.md#metadata)
- [name](Collection.md#name)

### Methods

- [add](Collection.md#add)
- [count](Collection.md#count)
- [createIndex](Collection.md#createindex)
- [delete](Collection.md#delete)
- [get](Collection.md#get)
- [modify](Collection.md#modify)
- [peek](Collection.md#peek)
- [query](Collection.md#query)
- [setMetadata](Collection.md#setmetadata)
- [setName](Collection.md#setname)
- [update](Collection.md#update)
- [upsert](Collection.md#upsert)
- [validate](Collection.md#validate)

## Constructors

### constructor

• **new Collection**(`name`, `api`, `metadata?`, `embeddingFunction?`)

Creates a new Collection instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the collection. |
| `api` | `ApiApi` | The API instance for the collection. |
| `metadata?` | `object` | - |
| `embeddingFunction?` | `CallableFunction` | (Optional) A callable function for generating embeddings. |

#### Defined in

[index.ts:188](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L188)

## Properties

### api

• `Private` **api**: `ApiApi`

#### Defined in

[index.ts:179](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L179)

___

### embeddingFunction

• **embeddingFunction**: `undefined` \| `CallableFunction`

#### Defined in

[index.ts:180](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L180)

___

### metadata

• **metadata**: `undefined` \| `object`

#### Defined in

[index.ts:178](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L178)

___

### name

• **name**: `string`

#### Defined in

[index.ts:177](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L177)

## Methods

### add

▸ **add**(`ids`, `embeddings`, `metadatas?`, `documents?`, `increment_index?`): `Promise`<`any`\>

Adds items to the collection.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ids` | `string` \| `string`[] | `undefined` | A single ID or an array of IDs for the items to be added. |
| `embeddings` | `undefined` \| `number`[] \| `number`[][] | `undefined` | A single embedding or an array of embeddings. If undefined, embeddings will be generated from documents. |
| `metadatas?` | `object` \| `object`[] | `undefined` | (Optional) A single metadata object or an array of metadata objects associated with the items. |
| `documents?` | `string` \| `string`[] | `undefined` | (Optional) A single document or an array of documents to generate embeddings for, if embeddings are not provided. |
| `increment_index` | `boolean` | `true` | (Optional) A boolean flag to increment the index after adding items. Default is true. |

#### Returns

`Promise`<`any`\>

A Promise that resolves to a Boolean indicating whether the items were added successfully.

#### Defined in

[index.ts:287](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L287)

___

### count

▸ **count**(): `Promise`<`any`\>

Returns the number of items in the collection.

#### Returns

`Promise`<`any`\>

A Promise that resolves to the number of items in the collection.

#### Defined in

[index.ts:357](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L357)

___

### createIndex

▸ **createIndex**(): `Promise`<`CreateIndex200Response`\>

#### Returns

`Promise`<`CreateIndex200Response`\>

#### Defined in

[index.ts:511](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L511)

___

### delete

▸ **delete**(`ids?`, `where?`, `where_document?`): `Promise`<`any`\>

Deletes items from the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids?` | `string`[] | (Optional) An array of IDs of the items to be deleted. |
| `where?` | `object` | (Optional) An object specifying filtering conditions for deletion. |
| `where_document?` | `object` | - |

#### Returns

`Promise`<`any`\>

A Promise that resolves to the result of the deletion operation.

#### Defined in

[index.ts:521](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L521)

___

### get

▸ **get**(`ids?`, `where?`, `limit?`, `offset?`, `include?`, `where_document?`): `Promise`<`any`\>

Retrieves items from the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids?` | `string`[] | (Optional) An array of IDs of the items to be retrieved. |
| `where?` | `object` | (Optional) An object specifying filtering conditions. |
| `limit?` | `number` | (Optional) A number indicating the maximum number of items to retrieve. |
| `offset?` | `number` | (Optional) A number indicating the offset for pagination. |
| `include?` | `IncludeEnum`[] | - |
| `where_document?` | `object` | - |

#### Returns

`Promise`<`any`\>

A Promise that resolves to the retrieved items.

#### Defined in

[index.ts:388](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L388)

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

#### Defined in

[index.ts:362](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L362)

___

### peek

▸ **peek**(`limit?`): `Promise`<`any`\>

Retrieves a limited number of items from the collection.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `limit` | `number` | `10` | (Optional) The maximum number of items to retrieve. Default is 10. |

#### Returns

`Promise`<`any`\>

A Promise that resolves to the retrieved items.

#### Defined in

[index.ts:504](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L504)

___

### query

▸ **query**(`query_embeddings`, `n_results?`, `where?`, `query_text?`, `where_document?`, `include?`): `Promise`<`any`\>

Queries the collection for the nearest neighbors of the provided query embeddings or query texts.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `query_embeddings` | `undefined` \| `number`[] \| `number`[][] | `undefined` | A single query embedding or an array of query embeddings. If undefined, embeddings will be generated from query_text. |
| `n_results` | `number` | `10` | (Optional) The number of nearest neighbors to return. Default is 10. |
| `where?` | `object` | `undefined` | (Optional) An object specifying filtering conditions. |
| `query_text?` | `string` \| `string`[] | `undefined` | (Optional) A single query text or an array of query texts to generate embeddings for, if query_embeddings are not provided. |
| `where_document?` | `object` | `undefined` | - |
| `include?` | `IncludeEnum`[] | `undefined` | - |

#### Returns

`Promise`<`any`\>

A Promise that resolves to the nearest neighbors of the query embeddings or query texts.

#### Defined in

[index.ts:460](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L460)

___

### setMetadata

▸ `Private` **setMetadata**(`metadata`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `undefined` \| `object` |

#### Returns

`void`

#### Defined in

[index.ts:204](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L204)

___

### setName

▸ `Private` **setName**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[index.ts:201](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L201)

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

#### Defined in

[index.ts:411](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L411)

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

#### Defined in

[index.ts:319](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L319)

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

#### Defined in

[index.ts:208](https://github.com/chroma-core/chroma/blob/f9b8f7c/clients/js/src/index.ts#L208)
