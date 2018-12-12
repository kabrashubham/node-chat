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
    // socket.emit('newMessage', {
    //     from: 'hey bro',
    //     text: 'whats up bro'
    // });

    // socket.on('createEmail',(newEmail)=>{
    //     console.log('create email',newEmail);
    // })
    socket.emit('newMessage',{
        from: 'Admin',
            text: 'welcome to chat app'
    })

    socket.broadcast.emit('newMessage',{
        from: 'Admin',
            text: 'New user joined'
    })

    socket.on('createMessage',(newMessage,callback)=>{
        console.log('create message',newMessage);
        io.emit('newMessage',{
            from : newMessage.from,
            text:newMessage.text
        })
        callback();
        // socket.broadcast.emit('newMessage',{
        //     from : newMessage.from,
        //         text:newMessage.text
        // })
    })

    socket.on('createLocationMessage', (coords) => {
        io.emit('newMessage',{
            from : 'Admin',
            text:'Data' + `${coords.latitude}` + `${coords.longtitude}`
        }, console.log(coords))
    });
    socket.on('disconnect', () => {
        console.log('user disconnected to server')
    });
})

server.listen(port, () => {
    console.log('Server is up')
})