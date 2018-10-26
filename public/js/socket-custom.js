var socket = io();

socket.on('connect', function(){

    console.log('Conectado al servidor');

});
// los on son par escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');
});

//los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alexis',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ',resp);
});

socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:',mensaje);
});