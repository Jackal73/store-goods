// Entry point for the application
import express from "express";
import config from "./config.js";
import router from "./router.js";
import cors from "cors";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.use(express.json());

// TODO: Lock down to specific origins
app.use(cors());
app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
