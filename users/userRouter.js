const express = require('express');

const userDb = require("./userDb.js"); 

// middleware imports 
const validateUser = require("../auth/Middleware-ValidateUser.js")
const validateUserId = require("../auth/Middleware-ValidateUser.js");
// middleware imports

const router = express.Router();


// .post() users 
router.post('/', validateUser, (req, res) => {
    const newUser = req.body; 

    userDb 
    .insert(newUser)
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
    const display = req.body; 

    userDb
    .get(display)
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

});

// .put() updates the users 
router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
