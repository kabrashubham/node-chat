const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');


var app = express();

var server = http.createServer(app);
var io = socketio(server);


const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
// console.log(__dirname + '/../public')
// console.log(publicPath)

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New user connect');
    // socket.emit('newEmail', {
    //     from: 'shubham@gmail.com',
    //     text: 'whats up'
    // });
    socket.emit('newMessage', {
        from: 'hey bro',
        text: 'whats up bro'
    });

    // socket.on('createEmail',(newEmail)=>{
    //     console.log('create email',newEmail);
    // })
    socket.on('createMessage',(newMessage)=>{
        console.log('create message',newMessage);
    })


    socket.on('disconnect', () => {
        console.log('user disconnected to server')
    });
})

server.listen(port, () => {
    console.log('Server is up')
})