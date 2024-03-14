---
sidebar_label: Collection
title: Collection
sidebar_position: 2
---

# Class: Collection

## Properties

### id

• **id**: `string`

___

### metadata

• **metadata**: `undefined` \| [`CollectionMetadata`](../modules.md#collectionmetadata)

___

### name

• **name**: `string`

## Methods

### add

▸ **add**(`params`): `Promise`<`AddResponse`\>

Add items to the collection

**`Example`**

```typescript
const response = await collection.add({
  ids: ["id1", "id2"],
  embeddings: [[1, 2, 3], [4, 5, 6]],
  metadatas: [{ "key": "value" }, { "key": "value" }],
  documents: ["document1", "document2"]
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AddParams`](../modules.md#addparams) | The parameters for the query. |

#### Returns

`Promise`<`AddResponse`\>

- The response from the API. True if successful.

___

### count

▸ **count**(): `Promise`<`number`\>

Count the number of items in the collection

**`Example`**

```typescript
const response = await collection.count();
```

#### Returns

`Promise`<`number`\>

- The response from the API.

___

### delete

▸ **delete**(`params?`): `Promise`<`string`[]\>

Deletes items from the collection.

**`Throws`**

If there is an issue deleting items from the collection.

**`Example`**

```typescript
const results = await collection.delete({
  ids: "some_id",
  where: {"name": {"$eq": "John Doe"}},
  whereDocument: {"$contains":"search_string"}
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`DeleteParams`](../modules.md#deleteparams) | The parameters for deleting items from the collection. |

#### Returns

`Promise`<`string`[]\>

A promise that resolves to the IDs of the deleted items.

___

### get

▸ **get**(`params?`): `Promise`<[`GetResponse`](../modules.md#getresponse)\>

Get items from the collection

**`Example`**

```typescript
const response = await collection.get({
  ids: ["id1", "id2"],
  where: { "key": "value" },
  limit: 10,
  offset: 0,
  include: ["embeddings", "metadatas", "documents"],
  whereDocument: { $contains: "value" },
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetParams`](../modules.md#getparams) | The parameters for the query. |

#### Returns

`Promise`<[`GetResponse`](../modules.md#getresponse)\>

- The response from the server.

___

### modify

▸ **modify**(`params?`): `Promise`<`void`\>

Modify the collection name or metadata

**`Example`**

```typescript
const response = await collection.modify({
  name: "new name",
  metadata: { "key": "value" },
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ModifyCollectionParams`](../modules.md#modifycollectionparams) | The parameters for the query. |

#### Returns

`Promise`<`void`\>

- The response from the API.

___

### peek

▸ **peek**(`params?`): `Promise`<[`GetResponse`](../modules.md#getresponse)\>

Peek inside the collection

**`Throws`**

If there is an issue executing the query.

**`Example`**

```typescript
const results = await collection.peek({
  limit: 10
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`PeekParams`](../modules.md#peekparams) | The parameters for the query. |

#### Returns

`Promise`<[`GetResponse`](../modules.md#getresponse)\>

A promise that resolves to the query results.

___

### query

▸ **query**(`params`): `Promise`<[`QueryResponse`](../modules.md#queryresponse)\>

Performs a query on the collection using the specified parameters.

**`Throws`**

If there is an issue executing the query.

**`Example`**

```ts
// Query the collection using embeddings
const results = await collection.query({
  queryEmbeddings: [[0.1, 0.2, ...], ...],
  nResults: 10,
  where: {"name": {"$eq": "John Doe"}},
  include: ["metadata", "document"]
});
```

**`Example`**

```js
// Query the collection using query text
const results = await collection.query({
  queryTexts: "some text",
  nResults: 10,
  where: {"name": {"$eq": "John Doe"}},
  include: ["metadata", "document"]
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`QueryParams`](../modules.md#queryparams) | The parameters for the query. |

#### Returns

`Promise`<[`QueryResponse`](../modules.md#queryresponse)\>

A promise that resolves to the query results.

___

### update

▸ **update**(`params`): `Promise`<`boolean`\>

Update the embeddings, documents, and/or metadatas of existing items

**`Example`**

```typescript
const response = await collection.update({
  ids: ["id1", "id2"],
  embeddings: [[1, 2, 3], [4, 5, 6]],
  metadatas: [{ "key": "value" }, { "key": "value" }],
  documents: ["new document 1", "new document 2"],
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AddParams`](../modules.md#addparams) | The parameters for the query. |

#### Returns

`Promise`<`boolean`\>

- The API Response. True if successful. Else, error.

___

### upsert

▸ **upsert**(`params`): `Promise`<`boolean`\>

Upsert items to the collection

**`Example`**

```typescript
const response = await collection.upsert({
  ids: ["id1", "id2"],
  embeddings: [[1, 2, 3], [4, 5, 6]],
  metadatas: [{ "key": "value" }, { "key": "value" }],
  documents: ["document1", "document2"],
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AddParams`](../modules.md#addparams) | The parameters for the query. |

#### Returns

`Promise`<`boolean`\>

- The response from the API. True if successful.
