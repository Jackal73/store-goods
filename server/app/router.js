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

// get details of one specific product by id
router.get("/storeGoods/:id", async (req, res) => {
  const storeGood = await collection.findOne({ _id: ObjectId(req.params.id) });
  res.json(storeGood);
});

router.post("/storeGoods", async (req, res) => {
  const createdStoreGood = await collection.insertOne(req.body);
  res.json(createdStoreGood);
});

export default router;
