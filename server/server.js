const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log("App listening on " + PORT);
});
