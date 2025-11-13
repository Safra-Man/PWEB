let http = require('http');
let server = http.createServer(function(req,res){
    let opcao = req.url;
    if(opcao=='/historia'){
        res.end("<html><body>Site da Fatec Sorocaba</html></body>"); 
    }
    else if(opcao=='/cursos'){
        res.end("<html><body>Cursos</html></body>"); 
    }
    else if(opcao=='/professores'){
        res.end("<html><body>Professores</html></body>"); 
    }
    else
    res.end("<html><body>Site da Fatec Sorocaba</html></body>"); 
});
server.listen(3000);