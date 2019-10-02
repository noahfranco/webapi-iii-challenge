const express = 'express';
const helmet = require("helmet")

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.get("/", (req, res) => {
  res.send("Welcome It's Working")
})

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} to ${req.path}`)

  next()
}

server.use(logger)
server.use(helmet)
server.use(express.json())

module.exports = server;
