const express = require('express');

const helmet = require("helmet");

const server = express();

const userRouter = require("./users/userRouter.js"); 

server.use(logger)
// imported package that need to be invoked 
server.use(helmet())
// imported package that need to be invoked 
server.use(express.json())

server.use("/api/users", userRouter)

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} to ${req.path}`)

  next()
}


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.get("/", (req, res) => {
  res.send("Welcome It's Working")
})


module.exports = server;
