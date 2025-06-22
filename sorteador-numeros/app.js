  function sortear() {
      let campo1 = document.getElementById('quantidade').value
      let campo2 = parseInt(document.getElementById('de').value)
      let campo3 = parseInt(document.getElementById('ate').value)
    let listadeNumeros = []
    let numero
    if (campo3 <= campo2) {
    alert(`O número do campo "Do número" deve ser inferior ao campo de "Até o número"`)
    return;
    if ((campo2 - campo3) <= campo1) {
        alert(`Por favor, verifique o intervalo dos números dos campos 'Do número' e Até o número'`);
        reiniciar(); // Limpa os campos
        return; // Interrompe a execução da função
  } 
    }
  for (let i = 0; i < campo1; i++) {
    numero = gerarNumeroAleatorio(campo2, campo3)
    
  while (listadeNumeros.includes(numero)) {
      numero = gerarNumeroAleatorio(campo2, campo3)
  }

  listadeNumeros.push(numero)
    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listadeNumeros} </label>`
    alteraEstadoBotao();
  }

  function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function exibirMensagemInicial() {
    resultado = ''
  }
  function alteraEstadoBotao() {
    let botao = document.getElementById('btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')) {
      botao.classList.remove('container__botao-desabilitado')
      botao.classList.add('container__botao')
    } else {
      botao.classList.remove('container__botao')
      botao.classList.add('container__botao-desabilitado')
    }
  }
  function limparCampo() {
    document.getElementById('quantidade').value = ''
  document.getElementById('de').value = ''
  document.getElementById('ate').value = ''
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
  }
  function reiniciar() {
    exibirMensagemInicial()
  limparCampo()
  alteraEstadoBotao()
  }
  