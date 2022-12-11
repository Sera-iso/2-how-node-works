const EventEmitter = require('events');
const http = require('http');

// Sales is the parent class and EventEmitter is the super class;
// with super() the parent class Sales will inherit all the methods of the super class EventEmitter.
class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('There was a new sale!')
})
myEmitter.on('newSale', () => {
    console.log('Customer name: Serena')
})
myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items in stock`)
})

myEmitter.emit('newSale', 9);


/////////////////////
const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received!');
    res.end('Request received');
    console.log(req.url);
});

server.on('request', (req, res) => {
    console.log('Another request 😄');
});

server.on('close', () => {
    console.log('Request closed!');
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for requests...");
});