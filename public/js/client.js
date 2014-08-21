define('client', ['socketio'], function(io) {
	var socket = io();

	socket.emit('login', {
		login: 'tilast',
		password: 'al030595'
	});
});