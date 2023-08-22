const express = require('express');
const { Script } = require('vm');
const app = express();
const PORT = 3000;

app.use(express.static("build"));
app.listen(PORT, () => {
    console.log("server started on port 3000");
  });