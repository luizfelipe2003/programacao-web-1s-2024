function criarProduto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adicionarProduto(p){
    produtos.push(p);
}

function listarProduto(){
    return produtos
}


module.exports = {
    criarProduto,
    adicionarProduto,
    listarProduto
}