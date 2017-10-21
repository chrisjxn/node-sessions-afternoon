const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , port = 3000
    , checkForSession = require('./middlewares/checkForSession')
    , swag_controller = require('./controllers/swag_controller')
    , auth_controller = require('./controllers/auth_controller');


const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: 'its a sweater',
    resave: false,
    saveUninitialized: true
}));

app.use(checkForSession);

app.get('/api/swag', swag_controller.read);
app.post('/api/login', auth_controller.login);
app.post('/api/register', auth_controller.register);
app.post('/api/signout', auth_controller.signout);
app.get('/api/user', auth_controller.getUser);


app.listen(port, () => console.log(`Server listening on port ${port}...`));