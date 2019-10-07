function validateUserID(req, res, next) {

    const { id } = req.params; 

    if(!id) {
        res.status(400).json({message: "missing post data"})
    } else {
        next()
    }    
}



module.exports = validateUserID; 