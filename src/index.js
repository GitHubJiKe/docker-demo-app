const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "public/views/index.html"))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
