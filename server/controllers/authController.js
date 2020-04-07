module.exports = {
    login: (req, res) => {
        const { username, isAdmin } = req.body;

        req.session.user = {
            username,
            isAdmin
        }

        res.status(200).json(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}