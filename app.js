const http = require('http');
const routes = require('./routes').default;

const server = http.createServer(routes);

server.listen(3000);