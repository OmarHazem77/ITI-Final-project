const express = require("express");
const server = express();
const cors = require('cors')
let allMovies = require("./data.json");
//console.log(allMovies)

//middleware
server.use(express.json());
server.use(cors())
//get all movies
server.get("/products", (req, res) => {
  res.send(allMovies);
});
//get single movies
server.get("/products/:id", (req, res) => {
  let reqId = req.params.id;
  let movies = allMovies.find((item) => item.id == reqId);
  if (movies) {
    res.send(movies);
  } else {
    res.send(`no product founded with this id:${reqId}`);
  }
});
//Add product
server.post("/addProduct", (req, res) => {
  let newMovies = req.body;
  newMovies.id = allMovies.length + 1;
  allMovies.push(newMovies);
  res.send({
    message: "product Add successfuly",
    list: allMovies,
  });
});

//delete single
server.delete("/deleteProduct/:id", (req, res) => {
  let reqId = req.params.id;
  let index = allMovies.findIndex((item) => item.id == reqId);
  if (index == -1) {
    res.send(`no product founded with this id:${reqId}`);
  } else {
    allMovies = allMovies.filter((item) => item.id != reqId);
    res.send({
      message: "product delete successfuly",
      list: allMovies,
    });
  }
});

server.get("/search", (req, res) => {
  let query = req.query.q?.toLowerCase();
  if (!query) {
    return res.send([]);
  }

  let results = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );

  res.send(results);
});
//create server
server.listen(3000, () => {
  console.log("http://localhost:3000/");
});
