import once from "./connections/once.js";
import storeGoodsData from "./data.js";

once
  .connect()
  .then((connection) =>
    connection
      .db("storeGoods")
      .collection("storeGoods")
      .insertMany(storeGoodsData)
  )
  .then(() => {
    once.close();
  });
