function validateUser(req, res, next) {
    const body = req.body;
    const name = req.name; 

    if(!body && !name) {
        res.status(400).json({message: "missing user data"})
    } else {
        next()
    } 
    // res.status(400).json({message: "missing required name field"})

    
}
module.exports = validateUser