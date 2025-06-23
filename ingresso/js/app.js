let palavraIngresso = quantidadeIngresso > 1 ? 'ingressos' : 'ingresso'
function comprar(){
  let ingressos = document.getElementById('tipo-ingresso').value
  let quantidadeIngresso = parseInt(document.getElementById('qtd').value)
  
  if (ingressos == 'pista') {
    comprarPista(quantidadeIngresso)
  } else {
    if (ingressos == 'superior'){
      comprarCadeiraSuperior(quantidadeIngresso)
    } else {
      if (ingressos == 'inferior') {
        comprarCadeiraInferior(quantidadeIngresso)
      }
    }
  }
 
}

function comprarPista(quantidadeIngresso) {
  let pista = parseInt(document.getElementById('qtd-pista').textContent)
    if (pista < quantidadeIngresso) {
      alert('Não há ingressos suficientes')
    } else {
       pista = pista - quantidadeIngresso
        document.getElementById('qtd-pista').textContent = pista
      alert(`Sua compra foi realizada com sucesso!`)
    }
  }

  function comprarCadeiraSuperior(quantidadeIngresso) {
    let cadeiraS = parseInt(document.getElementById('qtd-superior').textContent)
    if (quantidadeIngresso > cadeiraS) {
    alert('Não há ingressos suficientes')
    } else {
      cadeiraS = cadeiraS - quantidadeIngresso
      document.getElementById('qtd-superior').textContent = cadeiraS
      alert(`Sua compra foi realizada com sucesso!`)
    } 
  }
  function comprarCadeiraInferior(quantidadeIngresso) {
   let cadeiraI = parseInt(document.getElementById('qtd-inferior').textContent) 
  if (quantidadeIngresso > cadeiraI) { !confirm('Você tem certeza da sua compra?')
    alert('Não há ingressos o suficiente')
  } else {
    cadeiraI = cadeiraI - quantidadeIngresso
    document.getElementById('qtd-inferior').textContent = cadeiraI
    alert(`Sua compra foi realizada com sucesso!`)
   }
  }
