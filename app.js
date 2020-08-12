let express = require("express");
let app = express();
app.listen(3001, () => {
  console.log("Server running on port 3000");


  app.get("/", (req, res) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
  });
});