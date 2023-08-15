// Create web server and socket
app.use(express.static(__dirname + '/public'));
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// Create socket event handlers
io.sockets.on('connection', function (socket) {
  socket.emit('message', { message: 'Welcome to the chat' });
  socket.on('send', function (data) {
    io.sockets.emit('message', data);
  });
});

// Start server
server.listen(8080);
```
This is my client side code:
```
<html>
<head>
  <title>Chat</title>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="/socket.io/socket.io.js"></script>
  <script>
    $(document).ready(function () {
      var socket = io.connect('http://localhost:8080');
      socket.on('message', function (data) {
        $('#messages').append('<li>' + data.message + '</li>');
      });
      $('#send').click(function () {
        socket.emit('send', { message: $('#message').val() });
        $('#message').val('');
      });
    });
  </script>
</head>
<body>
  <ul id="messages"></ul>
  <input id="message" type="text" />
  <input id="send" type="button" value="Send" />
</body>
</html>
```
When I run this code, I get the following error:
```
Uncaught TypeError: Object #<Object> has no method 'connect'
```
I have tried the following things:

I have tried to change the order of the script tags.
I have tried to include the socket.io.js file from the CDN.
I have tried to use the socket.io.js file from the github repository.

Nothing seems to work. Any help would be greatly appreciated.

OP 2012-10-31: I found the answer to my question. I was using the wrong version of socket.io.js. I was using the version that is in the root directory of the github repository. I should have used the version in the `dist` directory.

