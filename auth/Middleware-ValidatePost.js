function validatePost(req, res, next) {
    const body = req.body;
    const text = req.text;  

    if(!body) {
        res.status(400).json({message: "missing post data"})
    } 
    if(!text) {
        res.status(400).json({message: "missing post data"})
    } else {
        next()
    }
}

module.exports = validatePost; 