import Router from "express";

const router = new Router();

// localhost:3000/api
router.get("/", (_, res) => {
  res.send("Hello from API router!");
});

export default router;
