const { io } = require('../server');


io.on('connection', (client) => {

    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a estra aplicación'

    });


    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cleinte
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data)
        // if (mensaje.usuario ){
        //     callback({
        //         resp: 'Todo sali bien!!!!!!!'
        //     });
        // }else{
        //     callback({
        //         resp: 'Todo salio mall!!!!!!'
        //     })
        // }
    });
});