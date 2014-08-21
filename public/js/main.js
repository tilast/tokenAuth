require.config({
	shim: {
		'socketio': {
			exports: 'io'
		}
	},
	paths: {
		socketio: 'http://localhost:3000/socket.io/socket.io',
	}
});

require(['client'], function(client) {
	
});