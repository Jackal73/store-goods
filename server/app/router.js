import Router from "express";
import config from "./config.js";
import client from "./db/connections/client.js";

const {
  db: { name, collection },
} = config;

const router = new Router();

// localhost:3000/api
router.get("/", (_, res) => {
  res.send("Hello from API router!");
});

// localhost:3000/api/storeGoods
router.get("/storeGoods", async (_, res) => {
  // Get all of the storeGoods
  const storeGoods = await client
    .db(name)
    .collection(collection)
    .find({})
    .toArray();
  res.json(storeGoods);
});

export default router;
