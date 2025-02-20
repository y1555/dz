const fs = require("fs");
  fs.stat("any.txt", (err, stats) => {
    console.log(stats);
  });