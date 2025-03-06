document.addEventListener('DOMContentLoaded', function(){
 const aumentaFonteBotao =  document.getElementById('aumenta-fonte');
 let tamanhoAtual = 1;
 aumentaFonteBotao.addEventListener('click', function() {
    tamanhoAtual += 0.1;
    document.body.fontSize = '${tamanhoAtual}'
    })

}
)