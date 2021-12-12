const http = require("http");
const fs = require("fs")
const host = 'localhost';
const port = 3000;

const server = http.createServer(function (req, res) {
    if (req.method == "GET") {
        switch (req.url) {
            case '/':
                const index = fs.readFileSync('./index.html');
                res.write(index);
                res.end();
                break;
            case '/about':
                const about = fs.readFileSync('./about.html');
                res.write(about);
                res.end();
                break;
            case '/services':
                const services = fs.readFileSync('./services.html');
                res.write(services);
                res.end();
                break;
            case '/json':
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(200);
                res.end(`{"message": "This is a JSON response"}`);
                break;
            default:
                res.statusCode = 404;
                res.write("Error 404");
                res.end();
                break;
        }
    } else if (req.method == "POST") {
        switch (req.url) {
            case '/post':
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    console.log(body);
                    res.end('Request-POST');
                });
                break;
            default:
                res.statusCode = 404;
                res.write("Error 404");
                res.end();
                break;

        };
    } else if (req.method == "PUT") {
        switch (req.url) {
            case '/put':
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    console.log(body);
                    res.end('Request-PUT');
                });
                break;
            default:
                res.statusCode = 404;
                res.write("Error 404");
                res.end();
                break;
        };
    } else if (req.method == "DELETE") {
        switch (req.url) {
            case '/delete':
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    console.log(body);
                    res.end('Request-DELETE');
                });
                break;
            default:
                res.statusCode = 404;
                res.write("Error 404");
                res.end();
                break;
        };
    }
    else if (req.method == "PATCH") {
        switch (req.url) {
            case '/patch':
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {
                    console.log(body);
                    res.end('Request-PATCH');
                });
                break;
            default:
                res.statusCode = 404;
                res.write("Error 404");
                res.end();
                break;
        };
    }
}).listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});