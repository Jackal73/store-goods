// Entry point for the application
import cors from "cors";
import express from "express";
import config from "./config.js";
import router from "./router.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.use(express.json());

// Lock down CORS to specific origin

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
