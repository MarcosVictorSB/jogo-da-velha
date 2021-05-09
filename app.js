var jogador, vencedor = null;
var jogadas = 0, xQuantidades = 0, oQuandidades = 0
var gameOver = false

var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')
var quadrados = document.querySelectorAll('.quadrado')
var jogadorX = document.getElementById('jogador-x')
var jogadorO = document.getElementById('jogador-o')

mudarJogador('X')

function eClicavel(id){
   var quadrado = document.getElementById(id)
   return quadrado.innerHTML !== '-'
}

function escolherQuadrado(id){   
   if(!gameOver){
      var quadrado = document.getElementById(id)

      if(eClicavel(id))
      {
         return
      }

      quadrado.innerHTML = jogador;
      quadrado.style.color = '#000'

      if(jogador === 'X'){
         jogador = 'O'
      }else{
         jogador = 'X'
      }

      if(jogadas >= 4){
         mudarJogador(jogador)
         checaVencedor()   
      }

      jogadas++

      if(jogadas >= 9 && !gameOver){
         setTimeout(() => {
            alert('Deu Velha')
         }, 500)         
      }
   }
}

function mudarJogador(valor){
   jogador = valor
   jogadorSelecionado.innerHTML = jogador
}

function checaVencedor(){
   var quadrado1 = document.getElementById('1')
   var quadrado2 = document.getElementById('2')
   var quadrado3 = document.getElementById('3')
   var quadrado4 = document.getElementById('4')
   var quadrado5 = document.getElementById('5')
   var quadrado6 = document.getElementById('6')
   var quadrado7 = document.getElementById('7')
   var quadrado8 = document.getElementById('8')
   var quadrado9 = document.getElementById('9')

   if(checaSequencia(quadrado1, quadrado2, quadrado3 )){
      mudarCorQuadrado(quadrado1, quadrado2, quadrado3)
      mudarVencedor(quadrado1)
      gameOver = true
      return
   }

   if(checaSequencia(quadrado4, quadrado5, quadrado6 )){
      mudarCorQuadrado(quadrado4, quadrado5, quadrado6 )
      mudarVencedor(quadrado4)
      gameOver = true
      return
   }

   if(checaSequencia(quadrado7, quadrado8, quadrado9 )){
      mudarCorQuadrado(quadrado7, quadrado8, quadrado9)
      mudarVencedor(quadrado7)
      gameOver = true
      return
   }

   if(checaSequencia(quadrado1, quadrado5, quadrado9 )){
      mudarCorQuadrado(quadrado1, quadrado5, quadrado9)
      mudarVencedor(quadrado1)
      gameOver = true
      return
   }

   if(checaSequencia(quadrado7, quadrado5, quadrado3 )){
      mudarCorQuadrado(quadrado7, quadrado5, quadrado3)
      mudarVencedor(quadrado7)
      gameOver = true
      return
   }

   if(checaSequencia(quadrado1, quadrado4, quadrado7 )){
      mudarCorQuadrado(quadrado1, quadrado4, quadrado7)
      mudarVencedor(quadrado1)
      gameOver = true
      return
   }

   if(checaSequencia(quadrado3, quadrado6, quadrado9 )){
      mudarCorQuadrado(quadrado3, quadrado6, quadrado9)
      mudarVencedor(quadrado4)
      gameOver = true
      return
   }

   if(checaSequencia(quadrado2, quadrado5, quadrado8 )){
      mudarCorQuadrado(quadrado2, quadrado5, quadrado8)
      mudarVencedor(quadrado2)
      gameOver = true
      return
   }
}

function mudarPlacar(vencedor){
   console.log(vencedor)
   if(vencedor === 'X'){
      xQuantidades++
      jogadorX.innerHTML = '';
      jogadorX.innerHTML = xQuantidades;
   }else{
      oQuandidades++
      jogadorO.innerHTML = '';
      jogadorO.innerHTML = oQuandidades;
   }
}

function mudarVencedor(quadrado){
   vencedor = quadrado.innerHTML;
   vencedorSelecionado.innerHTML = vencedor

   mudarPlacar(vencedor)
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
   quadrado1.style.backgroundColor = '#0f0'
   quadrado2.style.backgroundColor = '#0f0'
   quadrado3.style.backgroundColor = '#0f0'
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
   var igual = false;

   if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
      igual = true
   }

   return igual;
}

function reiniciar(){
   vencedor = null
   vencedorSelecionado.innerHTML = ''
   for(var i = 1 ; i<= 9; i++ ){
      var quadrado = document.getElementById(i);
      quadrado.style.backgroundColor = '#eee'
      quadrado.style.color = '#eee'
      quadrado.innerHTML = '-'
   }

   mudarJogador('X');
   gameOver = false
   jogadas = 0
}