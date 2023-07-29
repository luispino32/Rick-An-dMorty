var http = require("http");
var data = require('./utils/data.js');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req;
    const url_split = url.split(":");

    if(url_split.length === 2 && url_split[0] == '/rickandmorty/character'){
        const id = +url_split[1];

        for(const person of data){
            if(person.id === id){
                res.writeHead(200, {'Content-Type':'application/json'});
                res.end(JSON.stringify(person));
                return;
            }
        }
    }

    res.writeHead(404, {'Content-Type':'text/plain'});
    res.end("Error ");
}).listen(3001, 'localhost');