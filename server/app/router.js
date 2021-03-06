import Router from "express";
import { ObjectId } from "mongodb";
import config from "./config.js";
import client from "./db/connections/client.js";

const collection = client.db(config.db.name).collection(config.db.collection);

const router = new Router();

// localhost:3000/api
router.get("/", (_, res) => {
  res.send("Hello from API router!");
});

// localhost:3000/api/storeGoods
router.get("/storeGoods", async (_, res) => {
  // Get all of the storeGoods
  const storeGoods = await collection.find().toArray();
  res.json(storeGoods);
});

// get details of one specific product by :id ->(dynamic route)
router.get("/storeGoods/:id", async (req, res) => {
  const storeGood = await collection.findOne({ _id: ObjectId(req.params.id) });
  res.json(storeGood);
});

// Insert a storeGood with insertOne
router.post("/storeGoods", async (req, res) => {
  const createdStoreGood = await collection.insertOne(req.body);
  res.json(createdStoreGood);
});

// Update a storeGood with updateOne
router.put("/storeGoods", async (req, res) => {
  const updatedStoreGood = await collection.updateOne(
    { _id: ObjectId(req.body.id) },
    { $set: req.body.payload }
  );
  res.json(updatedStoreGood);
});

// Delete a storeGood by :id
router.delete("/storeGoods", async (req, res) => {
  const deletedStoreGood = await collection.deleteOne({
    _id: ObjectId(req.body.id),
  });
  res.json(deletedStoreGood);
});

export default router;
