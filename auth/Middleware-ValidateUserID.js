function validateUserID(req, res, next) {
    // const body = req.body;
    // const text = req.text;  

    const { id } = req.params; 

    if(!id) {
        res.status(400).json({message: "missing post data"})
    } else {
        next()
    } 
    
}

module.exports = validateUserID; 