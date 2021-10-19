import once from "./connections/once.js";
import storeGoodsData from "./data.js";

// Asynchronous Anonymous IIFE - Immediately Invoked Function Expression
(async () => {
  const conn = await once.connect();
  await conn.db("storeGoods").collection("storeGoods").deleteMany({});
  await conn
    .db("storeGoods")
    .collection("storeGoods")
    .insertMany(storeGoodsData);
  conn.close();
})();

// once
//   .connect()
//   .then((connection) =>
//     connection
//       .db("storeGoods")
//       .collection("storeGoods")
//       .insertMany(storeGoodsData)
//   )
//   .then(() => {
//     once.close();
//   });
