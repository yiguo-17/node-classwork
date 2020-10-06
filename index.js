const http = require('http');
const fs = require('fs');
const obj = [
    {
      name: 'Flo',
      email: 'flo@me.com',
    },
    {
      name: 'Josh',
      email: 'josh@me.com',
    },
  ];
const server = http.createServer((request,response)=>{
    //response.writeHead(200,{'Content-Type':'application/json'});
    //const readStream = fs.createReadStream(__dirname+'/lorem.txt','utf8');
    //const readStream2 = fs.createReadStream(__dirname+'/index.html')
    //const str = JSON.stringify(obj);
    //response.end(str)
    console.log(`Looking for route: ${request.url}`)
    if(request.url ==='/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        const readStream2 = fs.createReadStream(__dirname+'/index.html');
        readStream2.pipe(response)
    }else if (request.url ==='/user'){
        response.writeHead(200,{'Content-Type':'application/json'});
        const str = JSON.stringify(obj);
        response.end(str)
    }else if(request.url ==='/text'){
        response.writeHead(200,{'Content-Type':'text/plain'});
        const readStream = fs.createReadStream(__dirname+'/lorem.txt','utf8');
        readStream.pipe(response)
    }else if(request.url ==='/about'){
        response.writeHead(200,{'Content-Type':'text/html'});
        const streamAbout = fs.createReadStream(__dirname+'/about.html');
        streamAbout.pipe(response)
    }else{
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found\n");
        response.end()
    }
});

server.listen(3000,()=>{
    console.log('Server listening on port 3000')
});
