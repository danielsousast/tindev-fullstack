const app = require('./app');
const routes = require('./routes');

const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const {user} = socket.handshake.query;
    connectedUsers[user] = socket.id;
});

app.use((req, res, next) => {
     req.io = io;
     req.connectedUsers = connectedUsers;  
     return next();     
});

app.use(routes);

server.listen(3333);