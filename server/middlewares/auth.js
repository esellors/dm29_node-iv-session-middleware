module.exports = {
    verifyUser: (req, res, next) => {
        // const { username } = req.body;
    
        // if (!username) {
        //     res.status(403).json({ message: 'You must be logged in for that!!'})
        // } else {
        //     next();
        // }
        if(!req.session.user) {
            res.status(403).json({ message: 'You must be logged in for that!!'})
        } else {
            next();
        }
    },
    verifyAdmin: (req, res, next) => {
        // const { isAdmin } = req.body;

        if (!req.session.user.isAdmin) {
            res.status(403).json({ message: 'You must be an Admin for that!!'})
        } else {
            next();
        }
    }
}