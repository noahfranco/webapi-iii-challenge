const server = require("./server.js"); 

// dynamic port for heroku 

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`\n *** Server is Listening on ${port} *** \n`)
})




