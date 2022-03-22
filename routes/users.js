const express = require("express");
const router = express.Router();
const fs = require("fs");

// const path = require("../data/users.json");

// function jsonReader(filePath, cb) {
//   fs.readFile("../data/users.json", "utf8", (error, data) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log(JSON.parse(data));
//   });
// }

/* GET users listing. */
// router.get("/user", function (req, res, next) {
//   const { writeFile } = require("fs");

//   const path = "../data/users.json";
//   const config = { ip: "192.0.2.1", port: 3000 };

//   writeFile(path, JSON.stringify(config, null, 2), (error) => {
//     if (error) {
//       console.log("An error has occurred ", error);
//       return;
//     }
//     console.log("Data written successfully to disk");
//   });
// });
// fs.readFile("../data/users.json", "utf-8", function (err, data) {
//   console.log(JSON.parse(data));
// });

const user = require("../data/users.json");

// console.log(user);

// router.get("/user", (req, res, next) => {
//   fs.readFile("../data/users.json", "utf-8", (err, data) => {
//     console.log(data);
//     res.status(200).send(data);
//   });
// });

fs.readFile("/data/users.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(data);

    console.log(data);
  }
  console.log(data);
});
module.exports = router;
