---
sidebar_label: Client
title: Client
sidebar_position: 1
---

# Class: ChromaClient

## Hierarchy

- **`ChromaClient`**

  ↳ [`CloudClient`](CloudClient.md)

## Constructors

### constructor

• **new ChromaClient**(`params?`)

Creates a new ChromaClient instance.

**`Example`**

```typescript
const client = new ChromaClient({
  path: "http://localhost:8000"
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ChromaClientParams`](../modules.md#chromaclientparams) | The parameters for creating a new client |

## Properties

### \_adminClient

• `Private` `Optional` **\_adminClient**: [`AdminClient`](AdminClient.md)

___

### apiAdapter

• `Private` **apiAdapter**: `undefined` \| `ClientAuthProtocolAdapter`<`any`\>

___

### database

• `Private` **database**: `string` = `DEFAULT_DATABASE`

___

### tenant

• `Private` **tenant**: `string` = `DEFAULT_TENANT`

## Methods

### countCollections

▸ **countCollections**(): `Promise`<`number`\>

Counts all collections.

**`Throws`**

If there is an issue counting the collections.

**`Example`**

```typescript
const collections = await client.countCollections();
```

#### Returns

`Promise`<`number`\>

A promise that resolves to the number of collections.

___

### createCollection

▸ **createCollection**(`params`): `Promise`<[`Collection`](Collection.md)\>

Creates a new collection with the specified properties.

**`Throws`**

If there is an issue creating the collection.

**`Example`**

```typescript
const collection = await client.createCollection({
  name: "my_collection",
  metadata: {
    "description": "My first collection"
  }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CreateCollectionParams`](../modules.md#createcollectionparams) | The parameters for creating a new collection. |

#### Returns

`Promise`<[`Collection`](Collection.md)\>

A promise that resolves to the created collection.

___

### deleteCollection

▸ **deleteCollection**(`params`): `Promise`<`void`\>

Deletes a collection with the specified name.

**`Throws`**

If there is an issue deleting the collection.

**`Example`**

```typescript
await client.deleteCollection({
 name: "my_collection"
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`DeleteCollectionParams`](../modules.md#deletecollectionparams) | The parameters for deleting a collection. |

#### Returns

`Promise`<`void`\>

A promise that resolves when the collection is deleted.

___

### getCollection

▸ **getCollection**(`params`): `Promise`<[`Collection`](Collection.md)\>

Gets a collection with the specified name.

**`Throws`**

If there is an issue getting the collection.

**`Example`**

```typescript
const collection = await client.getCollection({
  name: "my_collection"
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetCollectionParams`](../modules.md#getcollectionparams) | The parameters for getting a collection. |

#### Returns

`Promise`<[`Collection`](Collection.md)\>

A promise that resolves to the collection.

___

### getOrCreateCollection

▸ **getOrCreateCollection**(`params`): `Promise`<[`Collection`](Collection.md)\>

Gets or creates a collection with the specified properties.

**`Throws`**

If there is an issue getting or creating the collection.

**`Example`**

```typescript
const collection = await client.getOrCreateCollection({
  name: "my_collection",
  metadata: {
    "description": "My first collection"
  }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CreateCollectionParams`](../modules.md#createcollectionparams) | The parameters for creating a new collection. |

#### Returns

`Promise`<[`Collection`](Collection.md)\>

A promise that resolves to the got or created collection.

___

### heartbeat

▸ **heartbeat**(): `Promise`<`number`\>

Returns a heartbeat from the Chroma API.

**`Example`**

```typescript
const heartbeat = await client.heartbeat();
```

#### Returns

`Promise`<`number`\>

A promise that resolves to the heartbeat from the Chroma API.

___

### listCollections

▸ **listCollections**(`«destructured»?`): `Promise`<[`CollectionType`](../modules.md#collectiontype)[]\>

Lists all collections.

**`Throws`**

If there is an issue listing the collections.

**`Example`**

```typescript
const collections = await client.listCollections({
    limit: 10,
    offset: 0,
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ListCollectionsParams`](../modules.md#listcollectionsparams) |

#### Returns

`Promise`<[`CollectionType`](../modules.md#collectiontype)[]\>

A promise that resolves to a list of collection names.

___

### reset

▸ **reset**(): `Promise`<`boolean`\>

Resets the state of the object by making an API call to the reset endpoint.

**`Throws`**

If there is an issue resetting the state.

**`Example`**

```typescript
await client.reset();
```

#### Returns

`Promise`<`boolean`\>

A promise that resolves when the reset operation is complete.

___

### version

▸ **version**(): `Promise`<`string`\>

Returns the version of the Chroma API.

**`Example`**

```typescript
const version = await client.version();
```

#### Returns

`Promise`<`string`\>

A promise that resolves to the version of the Chroma API.
