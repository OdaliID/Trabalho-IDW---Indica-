function iniciar() {
  let contadorDeFilmes = 0;
  let contadorDeLivros = 0;
  let arrayDeIdFilme = [];
  let arrayDeIdLivro = [];
  
  
  let showFomularioFilme = false;
  let showFomularioLivro = false;  
  let aguardaClick = aguardaClickIndicacao();
  
  /* Para ocultar as sections de filme e livro no carregamento */
  let escolhaFilme = document.getElementById('escolhaFilme');
  let mostrarSectionFilme = true;
  mostraEscondeSectionFilme();
  
  let escolhaLivro = document.getElementById('escolhaLivro');
  let mostrarSectionLivro = true;
  mostraEscondeSectionLivro();
  
  escolhaFilme.addEventListener("click", function() {
    mostraEscondeSectionFilme();
  });
  
  escolhaLivro.addEventListener("click", function() {
    mostraEscondeSectionLivro();
  });
  /* FIM - Para ocultar as sections de filme e livro no carregamento */
  
  let formFilme = document.getElementById('formIndicacaoFilme').style.display = 'none';
  let formLivro = document.getElementById('formIndicacaoLivro').style.display = 'none';
  
  /* Pegando dados digitados e inserindo na localStorage */
  let contadorFilme = 0;
  let botaoEnviarAvaliacaoFilme = document.getElementById('formIndicacaoFilme');
  botaoEnviarAvaliacaoFilme.addEventListener("submit", function(event) {
    event.preventDefault();
    let filmeDigitado = getFormsFilmes();
    adicionaLocalStorageFilme(filmeDigitado);
    
  });
  
  let contadorLivro = 0;
  let botaoEnviarAvaliacaoLivro = document.getElementById('formIndicacaoLivro');
  botaoEnviarAvaliacaoLivro.addEventListener("submit", function(event) {
    event.preventDefault();
    let livroDigitado = getFormsLivros();
    adicionaLocalStorageLivro(livroDigitado);
  });
  /* FIM - Pegando dados digitados e inserindo na localStorage */
  
  let listaDeFilmes = document.getElementById('listaFilmes').style.display = 'none';
  let verIndicacoesFilme = document.getElementById('botaoVerIndicacoesFilme');
  verIndicacoesFilme.addEventListener("click", function() {
    if (localStorage.length != 0) {
      mostrarListaDeFilmes();
    }
    else {
      alert('Você não inseriu nenhum dado ainda!');
    }
  })
  
  let listaDeLivros = document.getElementById('listaLivros').style.display = 'none';
  let verIndicacoesLivro = document.getElementById('botaoVerIndicacoesLivro');
  verIndicacoesLivro.addEventListener("click", function() {
    if (localStorage.length != 0) {
      mostrarListaDeLivros();
    }
    else {
      alert('Você não inseriu nenhum dado ainda!');
    }
  })
  
  document.getElementById('informacao').style.display = 'none';
  let verInformacoes = document.getElementById('telaInicial__informacoes');
  verInformacoes.addEventListener("click", function() {
    document.getElementById('informacao').style.display = 'block';
    document.getElementById('telaInicial').style.display = 'none';
  });

  let fecharInformacoes = document.getElementById('informacao__fechar');
  fecharInformacoes.addEventListener("click", function() {
    document.getElementById('informacao').style.display = 'none';
    document.getElementById('telaInicial').style.display = 'block';
  })

  function getFormsFilmes() {
    const filme = {
      nomeFilme: document.getElementById('inputNomeFilme').value,
      generoFilme: document.getElementById('inputGeneroFilme').value,
      descricaoFilme: document.getElementById('textAreaDescricaoFilme').value,
      notaFilme: document.getElementById('inputNotaFilme').value,
      id: contadorDeFilmes
    }
    limparCamposFilme();
    contadorDeFilmes++;
    return filme;
  }

  function getFormsLivros() {
    const livro = {
      nomeLivro: document.getElementById('inputNomeLivro').value,
      generoLivro: document.getElementById('inputGeneroLivro').value,
      qtdPaginasLivro: document.getElementById('inputQtdPaginasLivro').value,
      descricaoLivro: document.getElementById('textAreaDescricaoLivro').value,
      notaLivro: document.getElementById('inputNotaLivro').value,
      id: contadorDeLivros
    }
    limparCamposLivro();
    contadorDeLivros++;
    return livro;
  }

  function limparCamposFilme() {
    document.getElementById('inputNomeFilme').value = '';
    document.getElementById('inputGeneroFilme').value = '';
    document.getElementById('textAreaDescricaoFilme').value = '';
    document.getElementById('inputNotaFilme').value = '';
  }

  function limparCamposLivro() {
    document.getElementById('inputNomeLivro').value = '';
    document.getElementById('inputGeneroLivro').value = '';
    document.getElementById('inputQtdPaginasLivro').value = '';
    document.getElementById('textAreaDescricaoLivro').value = '';
    document.getElementById('inputNotaLivro').value = '';
  }

  function mostrarEsconderFormulario(tipo) {
    let statusFilme = !showFomularioFilme;
    if (tipo == "filme") {
      let formFilme = document.getElementById('formIndicacaoFilme');
      if (!!statusFilme) {
        formFilme.style.display = 'block';
        showFomularioFilme = !showFomularioFilme;
      }
      else {
        formFilme.style.display = 'none';
        showFomularioFilme = !showFomularioFilme;
      } 
    }
    else if (tipo == "livro") {
      let statusLivro = !showFomularioLivro;
      let formLivro = document.getElementById('formIndicacaoLivro');
      if (!!statusLivro) {
        formLivro.style.display = 'block';
        showFomularioLivro = !showFomularioLivro;
      }
      else {
        formLivro.style.display = 'none';
        showFomularioLivro = !showFomularioLivro;
      }
    }
  }

  function aguardaClickIndicacao() {
    let indicarFilme = document.getElementById('botaoIndicarFilme');
    indicarFilme.addEventListener("click", function() {
      mostrarEsconderFormulario("filme");
    });

    let indicarLivro = document.getElementById('botaoIndicarLivro');
    indicarLivro.addEventListener("click", function() {
      mostrarEsconderFormulario("livro");
    });
  }

  function mostraEscondeSectionFilme() {
    document.getElementById('listaFilmes').style.display = 'none';
    document.getElementById('listaLivros').style.display = 'none';

    let sectionLivro = document.getElementById('sectionLivro');
    let sectionFilme = document.getElementById('sectionFilme');
    mostrarSectionFilme = !mostrarSectionFilme;
    if (mostrarSectionFilme) {
      sectionFilme.style.display = 'block';
      sectionLivro.style.display = 'none';
    }
    else {
      sectionFilme.style.display = 'none';
    }
  }

  function mostraEscondeSectionLivro() {
    let sectionLivro = document.getElementById('sectionLivro');
    let sectionFilme = document.getElementById('sectionFilme');
    mostrarSectionLivro = !mostrarSectionLivro;
    if (mostrarSectionLivro) {
      sectionLivro.style.display = 'block';
      sectionFilme.style.display = 'none';
    }
    else {
      sectionLivro.style.display = 'none';
    }
  }

  function adicionaLocalStorageFilme(objetoFilme) {
    let nomeVariavel = `${'filme'+contadorFilme}`; 
    localStorage.setItem(nomeVariavel, JSON.stringify(objetoFilme));
    contadorFilme++;
  }

  function adicionaLocalStorageLivro(objetoLivro) {
    let nomeVariavel = `${'livro'+contadorLivro}`; 
    localStorage.setItem(nomeVariavel, JSON.stringify(objetoLivro));
    contadorLivro++;
  }

  function verificaSeFilmeExiste(id) {
    for (let i in arrayDeIdFilme) {
      if (arrayDeIdFilme[i] == id) {
        return true;
      }
    }
    return false;
  }

  function verificaSeLivroExiste(id) {
    for (let i in arrayDeIdLivro) {
      if (arrayDeIdLivro[i] == id) {
        return true;
      }
    }
    return false;
  }

  function mostrarListaDeFilmes() {
    let filme = 'filme';
    if (!!localStorage[filme+0]) {
      for (let i=0; i<localStorage.length; i++){
        if (!!localStorage[filme+i] && i == 0) {
          let filmesObj = JSON.parse(localStorage[filme+i]);
          document.getElementById('listaFilmesNome').innerHTML = filmesObj.nomeFilme;
          document.getElementById('listaFilmesGenero').innerHTML = filmesObj.generoFilme;
          document.getElementById('listaFilmesDescricao').innerHTML = filmesObj.descricaoFilme;
          document.getElementById('listaFilmesNota').innerHTML = filmesObj.notaFilme;
        }
        else if (!!localStorage[filme+i]) {  
          let filmesObj = JSON.parse(localStorage[filme+i]);
          if ( !verificaSeFilmeExiste(filmesObj.id) ) {
            let divPai = document.querySelector('.listaFilmes'); 
            let divPadrao = document.getElementById('listaFilmes__item');
            let div = divPadrao.cloneNode(true);
            divPai.appendChild(div);
            div.querySelector('#listaFilmesNome').innerHTML = filmesObj.nomeFilme;
            div.querySelector('#listaFilmesGenero').innerHTML = filmesObj.generoFilme;
            div.querySelector('#listaFilmesDescricao').innerHTML = filmesObj.descricaoFilme;
            div.querySelector('#listaFilmesNota').innerHTML = filmesObj.notaFilme;
            arrayDeIdFilme.push(filmesObj.id);
          }
        }
      }
      document.getElementById('listaFilmes').style.display = 'flex';
      document.getElementById('formIndicacaoFilme').style.display = 'none';
    }
    else {
      alert('Você não inseriu nenhum filme');
    }
  }

  function mostrarListaDeLivros() {
    let livro = 'livro';
    if (!!localStorage[livro+0]) {
      for (let i=0; i<localStorage.length; i++){
        if (!!localStorage[livro+i] && i == 0) {
          let livroObj = JSON.parse(localStorage[livro+i]);
          document.getElementById('listaLivrosNome').innerHTML = livroObj.nomeLivro;
          document.getElementById('listaLivrosGenero').innerHTML = livroObj.generoLivro;
          document.getElementById('listaLivrosQtdPaginas').innerHTML = livroObj.qtdPaginasLivro;
          document.getElementById('listaLivrosDescricao').innerHTML = livroObj.descricaoLivro;
          document.getElementById('listaLivrosNota').innerHTML = livroObj.notaLivro;
        }
        else if (!!localStorage[livro+i]) {  
          let livroObj = JSON.parse(localStorage[livro+i]);
          if ( !verificaSeLivroExiste(livroObj.id) ) {
            let divPai = document.querySelector('.listaLivros'); 
            let divPadrao = document.getElementById('listaLivros__item');
            let div = divPadrao.cloneNode(true);
            divPai.appendChild(div);
            div.querySelector('#listaLivrosNome').innerHTML = livroObj.nomeLivro;
            div.querySelector('#listaLivrosGenero').innerHTML = livroObj.generoLivro;
            div.querySelector('#listaLivrosQtdPaginas').innerHTML = livroObj.qtdPaginasLivro;
            div.querySelector('#listaLivrosDescricao').innerHTML = livroObj.descricaoLivro;
            div.querySelector('#listaLivrosNota').innerHTML = livroObj.notaLivro;
            arrayDeIdLivro.push(livroObj.id);
          }
        }
      }
      document.getElementById('listaLivros').style.display = 'flex';
      document.getElementById('formIndicacaoLivro').style.display = 'none';
    }
    else {
      alert('Você não inseriu nenhum livro');
    }
  }
}
document.addEventListener("DOMContentLoaded", iniciar);