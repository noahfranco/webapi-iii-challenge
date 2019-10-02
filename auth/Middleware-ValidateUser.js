function validateUserId(req, res, next) {
    const body = req.body;
    const name = req.name; 

    if(!body) {
        res.status(400).json({message: "missing user data"})
    } 
    if(body && name ) {
        next()
    } else {
        res.status(400).json({message: "missing required name field"})
    }
}
module.exports = validateUserId