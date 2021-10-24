import config from "../config.js";
import once from "./connections/once.js";
import storeGoodsData from "./data.js";

// Destructure 'db', then destructure 'name' and 'collectionName', and change collectionName to collection.
const {
  db: { name, collectionName: collection },
} = config;

// Asynchronous Anonymous IIFE - Immediately Invoked Function Expression
(async () => {
  const conn = await once.connect();
  await conn.db(name).collection(collection).deleteMany({});
  await conn.db(name).collection(collection).insertMany(storeGoodsData);
  conn.close();
})();
