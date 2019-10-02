function validatePostId(req, res, next) {
    const { id } = req.user; 
    if(id) {
        next()
    } else {
        res.status(400).json({message: "invalid user id"})
    }
};

module.exports = validatePostId; 