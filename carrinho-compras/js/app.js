let valorGeral = 0
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').innerHTML = ''

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorProduto = produto.split('R$')[1];
  let quantidadeProduto = document.getElementById('quantidade').value;
  
if (confirm('Você tem certeza que quer adicionar esses produtos?')){
  alert(`Você adicionou: ${quantidadeProduto} ${nomeProduto} - R$${valorProduto}`);} else {
    return
  } if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    } if (quantidadeProduto == 0){
      campoValorTotal.textContent = 'Insira uma quantidade válida'
    }


let preco = quantidadeProduto * valorProduto;

let carrinho = document.getElementById('lista-produtos')
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`
valorGeral = valorGeral + preco
let campoValorTotal = document.getElementById('valor-total')
campoValorTotal.textContent = `R$ ${valorGeral}`;
document.getElementById('quantidade').value = ''
};

function limpar() { if(confirm('Tem certeza que quer limpar?')){
document.getElementById('produto').value = ''
document.getElementById('quantidade').value = ''
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').innerHTML = ''
} else {
  return
}
}
