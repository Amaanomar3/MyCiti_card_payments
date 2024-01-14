const express = require("express");
const path = require("path");
const app = express();
const fileName = "index.html";
const port = 4200;

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
