

const http = require('http');

http.createServer( (req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'application/json'});

    let salida = {
        nombre: 'alexis',
        edad: 21,
        url: req.url
    }

    res.write( JSON.stringify( salida ));
    // res.write('hola mundo');
    res.end();

    })
    .listen(8080);

console.log('Escuchandio el pueto 8080');