var socket = io();
socket.on('connect',function() {
    console.log('connected to server')

    // socket.emit('createEmail',{
    //     to:'mike@ex.com',
    //     text:'create email please'
    // })
    // socket.emit('createMessage',{
    //     from:'hey bro',
    //     text:'create email please'
    // })
});
socket.on('disconnect',function(){
    console.log('disconnected to server')
});

// socket.on('newEmail',function(email){

//     console.log('New Email',email)
// })
socket.on('newMessage',function(mess){

    console.log('New Message',mess)
})
