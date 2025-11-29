import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "hello world from ubuntu server" });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
