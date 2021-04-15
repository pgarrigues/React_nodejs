const express = require("express");
const path = require("path");

// permet d'avoir des variables d'environnement
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.static("client/build"));

app.get("/api/test", (req, res) => {
  res.send({
    msg: "salut les potes",
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
