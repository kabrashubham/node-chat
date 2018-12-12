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

    // console.log('New Message',mess);
    var li = jQuery('<li></li>');
    li.text(`${mess.from}: ${mess.text}`)
    jQuery('#messages').append(li);
});


// socket.emit('createMessage',{
//         from:'hey bro',
//         text:'create email please'
//     },function(data){
//         console.log('Got it',data)
//     })
jQuery('#message-from').on('submit',function(e){
    e.preventDefault();
    socket.emit('createMessage',{
        from:'User',
        text:jQuery('[name=message]').val()
    },function(){

    })
})