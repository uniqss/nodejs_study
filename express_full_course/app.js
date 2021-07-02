// https://www.youtube.com/watch?v=Oe421EPjeBE

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("welcome to our home page")
    } else if (req.url === "/about") {
        res.end("Here is our short story.")
    } else {
        res.end("page not found~~")
    }
});

server.listen(5000);