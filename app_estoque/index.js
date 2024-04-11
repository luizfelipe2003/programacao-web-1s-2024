const express = require('express');
const estoque = express('./src/estoque');

const app = express();

app.get('/adiicionar/:id/:nome/:qtd', function (req, res){

    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.nome;
    let p   = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(p); 
    res.send(p);
});

app.get('/listar', funcition(req, res)
)




const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta' + PORT);
});