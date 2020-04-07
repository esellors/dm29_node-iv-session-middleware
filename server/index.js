require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const { getAll, addOne, deleteOne } = require('./controllers/drinkController');
const { verifyUser, verifyAdmin } = require('./middlewares/auth');
const { login, logout } = require('./controllers/authController')

const { SERVER_PORT, SESSION_SECRET } = process.env;

// app.use((req, res, next) => {
//     console.log('Server Hit!')
//     next();
// });

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

app.use(express.json());

// app.use((req, res, next) => {
//     req.session.user = { name: 'Ted'}
//     // console.log(req.session)
//     next();
// })

// auth endpoints
app.post('/auth/login', login)
app.post('/auth/logout', logout)

// drink endpoints
app.get('/api/drinks', getAll);

// user endpoints
app.use(verifyUser);

app.post('/api/drinks', addOne);
app.delete('/api/drinks/:drinkId', verifyAdmin, deleteOne);

app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))