const fs = require("fs");

  fs.writeFile("any2.txt", "anything", (err) => {
    console.log(err);})
  fs.readFile("any2.txt", (err, buf) => {
    if(error){
      return console.log(error)
    }
    console.log(buf);
  });
  fs.stat("any2.txt", (err, stats) => {
    console.log(stats);
  });
  fs.unlink("any2.txt", (err) => {if(err) console.log(err)});