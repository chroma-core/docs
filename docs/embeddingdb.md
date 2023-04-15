---
sidebar_position: 1
title: "🧠 What is an Embedding DB?"

---

# Chroma, the embedding database.

## Introduction:

In this post, we will focus on creating a mental model of an "embedding database" so you can build more creative and more powerful apps with Chroma's API.

## 1. A Box

In Chroma, data is stored in boxes. Chroma's boxes are 768 dimensions.  
A 768d box is hard to visualize, so lets look at a 3d box.

> API Tip : Use client.create_collection() to create a box.

<br/>
<br/>

<img src="/img/embeddingdb_cube.png" />

<br/>
<br/>


## 2. Add a Point

To add a point to a 3d box, you need a coordinate - [x,y,z].

> Point's raw data => Box's embedding function => Point's coordinate  
The coordinate is called an embedding.

In the box, nearby coordinates have similar data.

> API Tip : Use collection.add() to create a point.

Lets add the points "red", "yellow", and "blue" to the 3d box.  
Look, "red" and "yellow" are nearby because "red" and "yellow" are similar.

<br/>
<br/>

<img src="/img/embeddingdb_add.png" />

<br/>
<br/>

## 2. Query with a Point

To query with a point, you (temporarily) add a point, and discover points nearby.

> API Tip : Use collection.query() to query with a point.

Lets query with the point "orange".  
Look, we discover that "red" and "yellow" are nearby "orange".

<br/>
<br/>

<img src="/img/embeddingdb_query.png" />

<br/>
<br/>

## Conclusion:

Before leaving, lets focus on choosing what points to add / query with.  
You want to choose coordinates that will be nearby each other in the box.  
Therefore, you want to choose raw data that will be similar to raw data in the box.
