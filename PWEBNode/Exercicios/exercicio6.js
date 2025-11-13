let http = require('http');
let server = http.createServer(function(req,res){
    res.end("<html><body>Site da Fatec Sorocaba</html></body>");    
});
server.listen(3000);