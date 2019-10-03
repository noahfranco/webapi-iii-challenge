const express = require('express');

const userDb = require("./userDb.js"); 

// middleware imports 
const validateUser = require("../auth/Middleware-ValidateUser.js")
const validateUserId = require("../auth/Middleware-ValidateUser.js");
// middleware imports

const router = express.Router();


// .post() users 
router.post('/', validateUser, (req, res) => {
    const users = req.body.users; 

    userDb 
    .insert(users)
    .then(person => {
        res.status(201).json(person); 
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "Something went wrong"})
    })
});

// .post() a blog post to the users
router.post('/:id/posts', validateUserId, (req, res) => {
    const { id } = req.params; 

    userDb
    .insert(id)
    .then(userID => {
        res.status(201).json({userID})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Something went wrong"})
    })
});

// .get() users
router.get('/', (req, res) => {
    const users = req.body.users; 

    userDb
    .get(users)
    .then(users => {
        res.status(201).json(users)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Something went wrong"})
    })
});

// .get() users with ID
router.get('/:id', (req, res) => {
    const { id } = req.params; 

    userDb
    .getById(id)
    .then(display => {
        res,status(201).json(display)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Something went wrong"})
    })

});

// .get() blog post
router.get('/:id/posts', (req, res) => {
    
});

// .delete() deletes the users 
router.delete('/:id', (req, res) => {
    const { id } = req.params;  

    userDb 
    .remove(id)
    .then(gone => {
        res.status(201).json(gone)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Something went wrong"})
    })
});

// .put() updates the users 
router.put('/:id', (req, res) => {
const { id } = req.params; 
const users = req.params.users; 

userDb(id)
.update(id, {users})
.then(newUser => {
    res.status(201).json(newUser)
})
.catch(error => {
    console.log(error)
    res.status(500).json({error: "Something when wrong"})
})

});

module.exports = router;
