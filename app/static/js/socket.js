var socket = io()
    //socket.emit('message', "holaa")
$('#env').on('click', function() {
    socket.send($('#user').val() + ' ' + $('#msg').val());
    $('#msg').val('');
    socket.disconnect();
});
socket.on('message', function(msg) {
    $('#recive').append('<li>' + msg + '</li>')
});