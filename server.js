'use strict';

var http = require('http'),
    express = require('express');

const app = express();

// app.use((request, response, next) => {
//     response.write("test");
// });

// app.get('/', (request, response) => {
// response.send('Hello, World!');
// });
const server = new http.Server(app);

server.listen(3000,() => {
    console.log('Server started on port 3000');
});
