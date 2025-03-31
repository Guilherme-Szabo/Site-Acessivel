document.addEventListener('DOMContentLoaded', function(){
 
 const botaoDeAcessesibilidade = document.getElementById('botao-acessibilidade');
 const opcoesDeAcessisibilidade = document.getElementById('opcoes-acessiblidade');

 botaoDeAcessibilidade.addEventListener('click', function() {
 botaoDeAcessesibilidade.classList.toggle('rotacao-botao');
 botaoDeAcessesibilidade.classList.toggle('apresenta-lista')
 })

const aumentaFonteBotao =  document.getElementById('aumenta-fonte');
 const diminuaFonteBotao =  document.getElementById('diminua-fonte');
 
 let tamanhoAtual = 1;
 aumentaFonteBotao.addEventListener('click', function() {
    tamanhoAtual += 0.1;
    document.body.fontSize = '${tamanhoAtual}ren'
    });

   diminuaFonteBotao.addEventListener('click', function() {
       tamanhoAtual -= 0.1;
       document.body.fontSize = '${tamanhoAtual}ren'
       });
   
});