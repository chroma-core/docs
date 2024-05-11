---
slug: /integrations/rivet
title: Rivet
---

## [Rivet Open-Source Visual AI Programming Environment](https://rivet.ironcladapp.com/)

Rivet is a visual programming environment for building AI agents with LLMs. Iterate on your prompt graphs in Rivet, then run them directly in your application. With Rivet, teams can effectively design, debug, and collaborate on complex LLM prompt graphs, and deploy them in their own environment.

Rivet's visual environment, easy debugger, and remote executor unlocked our team's ability to collaborate on increasingly complex and powerful LLM prompt graphs.

<img src="/img/rivet.png" />

### Why Rivet?

#### Visualize and Build
Visualize and build complex chains to create applications for production — not just prototyping.

#### Debug Remotely
See what's under the hood and observe the execution of prompt chains in your application, in real-time.

#### Collaborate
Rivet graphs are just YAML files, so you can version them in your team's repository, and review them using your favorite code review tools.


## Rivet Chroma Plugin

The Rivet Chroma Plugin is a plugin for [Rivet](https://rivet.ironcladapp.com) to add functionality for the [Chroma](https://www.trychroma.com/) vector database. It adds the following nodes to Rivet:

- Chroma Add
- Chroma Delete
- Chroma Get
- Chroma Query
- Chroma Update
- Create Collection
- Delete Collection
- List Collections


### Using the plugin

#### In Rivet

To use this plugin in Rivet:

1. Open the plugins overlay at the top of the screen.
2. Search for "rivet-plugin-chromadb"
3. Click the "Install" button to install the plugin into your current project.

#### In the SDK

1. Import the plugin and Rivet into your project:

   ```ts
   import * as Rivet from "@ironclad/rivet";
   import RivetPluginChroma from "@ironclad/rivet-plugin-chromadb";
   ```

2. Initialize the plugin and register the nodes with the `globalRivetNodeRegistry`:

   ```ts
   Rivet.globalRivetNodeRegistry.registerPlugin(RivetPluginChroma(Rivet));
   ```

   (You may also use your own node registry if you wish, instead of the global one.)

3. The nodes will now work when ran with `runGraphInFile` or `createProcessor`.

### Configuration

#### In Rivet

By default, the plugin will attempt to connect to a database at `http://localhost:8000`. If you would like you change this, you can open the Settings window, navigate to the Plugins area, and you will see a `Database URI` setting. You can change this to the URI of your Chroma database.

#### In the SDK

When using the SDK, you can pass a `databaseUri` option to the plugin to configure the database URI:

Using `createProcessor` or `runGraphInFile`, pass in via `pluginSettings` in `RunGraphOptions`:

```ts
await createProcessor(project, {
  ...etc,
  pluginSettings: {
    chroma: {
      databaseUri: "http://localhost:8000",
    },
  },
});
```

### Nodes

#### Chroma Add

Add an item to a collection in Chroma. You must provide an embedding for the item, and optionally a document. The item must also have an ID - you can use the [RNG Node](https://rivet.ironcladapp.com/docs/node-reference/RNG) or [Hash Node](https://rivet.ironcladapp.com/docs/node-reference/hash) to generate random or deterministic IDs.

##### Inputs

| Title     | Data Type | Description                                                  | Default Value | Notes                                                                                                                                              |
| --------- | --------- | ------------------------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Embedding | `vector`  | The embedding of the item to add to the collection in Chroma | (required)    | You can use the [Get Embedding Node](https://rivet.ironcladapp.com/docs/node-reference/get-embedding) to get vector embeddings to store in Chroma. |
| Document  | `string`  | The document to associate with the embedding. Optional.      | (empty)       |                                                                                                                                                    |

Additional inputs available with toggles in the editor.

##### Outputs

| Title | Data Type | Description                         | Notes |
| ----- | --------- | ----------------------------------- | ----- |
| ID    | `string`  | The ID of the row stored in Chroma. |       |

##### Editor Settings

| Setting                         | Description                                                                                                                                                                                                                                                               | Default Value  | Use Input Toggle   | Input Data Type |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------ | --------------- |
| Collection Name                 | The name of the collection to add the item into.                                                                                                                                                                                                                          | new-collection | Yes                | `string`        |
| Create Collection If Not Exists | If the collection does not exist, create it.                                                                                                                                                                                                                              | true           | Yes                | `boolean`       |
| ID                              | The ID of the item to add. If empty, a random ID will not be generated. You can use the [RNG Node](https://rivet.ironcladapp.com/docs/node-reference/RNG) or [Hash Node](https://rivet.ironcladapp.com/docs/node-reference/hash) to generate random or deterministic IDs. | (empty)        | Yes (default true) | `string`        |
| Upsert                          | If the item already exists, update it instead of throwing an error.                                                                                                                                                                                                       | true           | Yes                | `boolean`       |
| Metadata                        | Additional key/value pairs to store with the item.                                                                                                                                                                                                                        | (empty)        | Yes                | `object`        |

#### Chroma Delete

Delete an item from a collection in Chroma.

##### Inputs

See Editor Settings, all inputs are toggleable.

##### Outputs

| Title | Data Type  | Description                                                 | Notes |
| ----- | ---------- | ----------------------------------------------------------- | ----- |
| IDs   | `string[]` | The IDs of the items that were deleted from the collection. |       |

##### Editor Settings

| Setting                         | Description                                                                                                                                                     | Default Value  | Use Input Toggle   | Input Data Type |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------ | --------------- |
| Collection Name                 | The name of the collection to delete the item from.                                                                                                             | new-collection | Yes                | `string`        |
| Create Collection If Not Exists | If the collection does not exist, create it.                                                                                                                    | true           | Yes                | `boolean`       |
| ID                              | The ID of the item to delete. If empty, then Where filters will be used instead.                                                                                | (empty)        | Yes (default true) | `string`        |
| Where                           | A JSON object representing [Where filters](https://docs.trychroma.com/usage-guide#using-where-filters) to use to find the items to delete.                      | (empty)        | Yes                | `object`        |
| Where Document                  | A JSON object representing a [Where document filter](https://docs.trychroma.com/usage-guide#filtering-by-document-contents) to use to find the items to delete. | (empty)        | Yes                | `object`        |

#### Chroma Get

Retrieves (not queries) one or more items from a collection in Chroma. If you are searching, use the Chroma Query node instead.

##### Inputs

See Editor Settings, all inputs are toggleable.

##### Outputs

| Title | Data Type  | Description                                            | Notes |
| ----- | ---------- | ------------------------------------------------------ | ----- |
| IDs   | `string[]` | The IDs of the items that were retrieved from Chroma.  |       |
| Items | `object[]` | The full item objects that were retrieved from Chroma. |       |

##### Editor Settings

| Setting                         | Description                                                                                                                                                       | Default Value  | Use Input Toggle   | Input Data Type |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------ | --------------- |
| Collection Name                 | The name of the collection to retrieve the item from.                                                                                                             | new-collection | Yes                | `string`        |
| Create Collection If Not Exists | If the collection does not exist, create it.                                                                                                                      | true           | Yes                | `boolean`       |
| Limit                           | The maximum number of items to retrieve.                                                                                                                          | 10             | Yes                | `number`        |
| Offset                          | The number of items to skip before retrieving.                                                                                                                    | 0              | Yes                | `number`        |
| IDs                             | The IDs of the items to retrieve. If empty, then Where filters will be used instead.                                                                              | (empty)        | Yes (default true) | `string[]`      |
| Where                           | A JSON object representing [Where filters](https://docs.trychroma.com/usage-guide#using-where-filters) to use to find the items to retrieve.                      | (empty)        | Yes                | `object`        |
| Where Document                  | A JSON object representing a [Where document filter](https://docs.trychroma.com/usage-guide#filtering-by-document-contents) to use to find the items to retrieve. | (empty)        | Yes                | `object`        |

#### Chroma Query

Queries one or more items from a collection in Chroma using an embedding to find the nearest neighbors. If you are retrieving a specific item, use the Chroma Get node instead.

##### Inputs

| Title     | Data Type | Description                                         | Default Value | Notes                                                                                                                                              |
| --------- | --------- | --------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Embedding | `vector`  | The embedding to use to find the nearest neighbors. | (required)    | You can use the [Get Embedding Node](https://rivet.ironcladapp.com/docs/node-reference/get-embedding) to get vector embeddings to store in Chroma. |

Additional inputs available with toggles in the editor.

##### Outputs

| Title | Data Type  | Description                                                                                                     | Notes |
| ----- | ---------- | --------------------------------------------------------------------------------------------------------------- | ----- |
| IDs   | `string[]` | The IDs of the items that were retrieved from Chroma.                                                           |       |
| Items | `object[]` | The full item objects that were retrieved from Chroma. Includes the distances each item has from the embedding. |       |

##### Editor Settings

| Setting                         | Description                                                                                                                                                       | Default Value  | Use Input Toggle | Input Data Type |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------- | --------------- |
| Collection Name                 | The name of the collection to query the item from.                                                                                                                | new-collection | Yes              | `string`        |
| Create Collection If Not Exists | If the collection does not exist, create it.                                                                                                                      | true           | Yes              | `boolean`       |
| Num Results                     | The maximum number of items to retrieve.                                                                                                                          | 10             | Yes              | `number`        |
| Where                           | A JSON object representing [Where filters](https://docs.trychroma.com/usage-guide#using-where-filters) to use to find the items to retrieve.                      | (empty)        | Yes              | `object`        |
| Where Document                  | A JSON object representing a [Where document filter](https://docs.trychroma.com/usage-guide#filtering-by-document-contents) to use to find the items to retrieve. | (empty)        | Yes              | `object`        |

#### Chroma Update

Updates an existing item in a collection in Chroma.

##### Inputs

| Title     | Data Type | Description                                                              | Default Value | Notes                                                                                                                                              |
| --------- | --------- | ------------------------------------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Embedding | `vector`  | The embedding to set for the item to update in the collection in Chroma. | (required)    | You can use the [Get Embedding Node](https://rivet.ironcladapp.com/docs/node-reference/get-embedding) to get vector embeddings to store in Chroma. |

Additional inputs available with toggles in the editor.

##### Outputs

| Title | Data Type | Description                                    | Notes |
| ----- | --------- | ---------------------------------------------- | ----- |
| ID    | `string`  | The ID of the item that was updated in Chroma. |       |

##### Editor Settings

| Setting                         | Description                                        | Default Value  | Use Input Toggle   | Input Data Type |
| ------------------------------- | -------------------------------------------------- | -------------- | ------------------ | --------------- |
| Collection Name                 | The name of the collection to update the item in.  | new-collection | Yes                | `string`        |
| Create Collection If Not Exists | If the collection does not exist, create it.       | true           | Yes                | `boolean`       |
| ID                              | The ID of the item to update.                      | (empty)        | Yes (default true) | `string`        |
| Metadata                        | Additional key/value pairs to store with the item. | (empty)        | Yes                | `object`        |

### Create Collection

Creates a collection in Chroma.

##### Inputs

See Editor Settings, all inputs are toggleable.

##### Outputs

| Title           | Data Type | Description                                  | Notes |
| --------------- | --------- | -------------------------------------------- | ----- |
| Collection Name | `string`  | The name of the collection that was created. |       |

##### Editor Settings

| Setting          | Description                                              | Default Value  | Use Input Toggle | Input Data Type |
| ---------------- | -------------------------------------------------------- | -------------- | ---------------- | --------------- |
| Collection Name  | The name of the collection to create.                    | new-collection | Yes              | `string`        |
| Ignore If Exists | If the collection already exists, do not throw an error. | true           | Yes              | `boolean`       |
| Metadata         | Additional key/value pairs to store with the collection. | (empty)        | Yes              | `object`        |

#### Delete Collection

Deletes a collection in Chroma.

##### Inputs

See Editor Settings, all inputs are toggleable.

##### Outputs

| Title           | Data Type | Description                                  | Notes |
| --------------- | --------- | -------------------------------------------- | ----- |
| Collection Name | `string`  | The name of the collection that was deleted. |       |

##### Editor Settings

| Setting         | Description                           | Default Value  | Use Input Toggle | Input Data Type |
| --------------- | ------------------------------------- | -------------- | ---------------- | --------------- |
| Collection Name | The name of the collection to delete. | new-collection | Yes              | `string`        |

#### List Collections

Lists all collections in Chroma.

##### Inputs

This node has no inputs.

##### Outputs

| Title            | Data Type  | Description                             | Notes |
| ---------------- | ---------- | --------------------------------------- | ----- |
| Collection Names | `string[]` | The names of the collections in Chroma. |       |
| Collections      | `object[]` | The full collection objects in Chroma.  |       |

##### Editor Settings

This node has no editor settings.

**Note: unless Chroma is configured to accept CORS from `tauri://localhost`, you must use the [Node Executor](https://rivet.ironcladapp.com/docs/user-guide/executors#node) with this plugin.**

### Chroma Rivet Tutorials

[How To Create A Knowledge Base (ChromaDB + Retrieval Augemented Generation)- no code tutorial](https://www.youtube.com/watch?v=odiDX3g8fxc)
This video shows how to build production ready "Retrieval Augmented Generation" (RAG) applications with Rivet using ChromaDB and also shows it's ability to use metadata for filtering.

### More Information

For more information see the [Rivet docs](https://rivet.ironcladapp.com/docs),and our API reference where you find out how you can [build AI applications with Open AI, ChromaDB and Node.js](https://rivet.ironcladapp.com/docs/api-reference/node/overview), including [GPT Function Calling](https://rivet.ironcladapp.com/docs/node-reference/gpt-function) as well as connecting other LLMs. 
