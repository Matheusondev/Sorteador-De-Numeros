  let contagem = 1

function jogoAlugados() {
    console.log(`Contagem em ${contagem}`)
}

  function alterarStatus(id) {
    let altereBotao = document.getElementById(`game-${id}`)
  let imagem = altereBotao.querySelector('.dashboard__item__img')
  let botao1 = altereBotao.querySelector('.dashboard__item__button')
  let nomeJogo = altereBotao.querySelector('.dashboard__item__name')
  
  if (imagem.classList.contains('dashboard__item__img--rented')) {
    if (confirm(`Você tem certeza que quer devolver ${nomeJogo.textContent}?`))
    imagem.classList.remove('dashboard__item__img--rented')
    botao1.classList.remove('dashboard__item__button--return');
    botao1.textContent = 'Alugar'
    contagem--
  } else {
    imagem.classList.add('dashboard__item__img--rented')
    botao1.classList.add('dashboard__item__button--return');
    botao1.textContent = 'Devolver'
    contagem++
    }
  jogoAlugados()
  }

  document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    jogoAlugados();
});