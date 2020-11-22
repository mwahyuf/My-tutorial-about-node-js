const EventEmitter = require('events');

const emitter = new EventEmitter();

//Mendaftar register
emitter.addListener('messageLogged', function(){
    console.log('Listener Dipanggil');
});

// Raise an event
emitter.emit('messageLogged');