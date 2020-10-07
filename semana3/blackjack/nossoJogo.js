/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".*/
console.log('Bem vindo ao jogo BlackJack!');

/** Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?". */
if(confirm("Pergunta de sim ou não")) {

   console.log('Iniciando nova rodada');

   /**Primeira carta do usuario */
   const carta = comprarCarta();
   const cartaU1 = carta.texto;
   const valorU1 = carta.valor;
   console.log('Usuario cartas A: ' + carta.texto + ' valor: ' + carta.valor)
   

   /**Segunda carta do uasuario */
   const carta2 = comprarCarta();
   const cartaU2 = carta2.texto;
   const valorU2 = carta2.valor;
   console.log('Usuario cartas B: ' + carta2.texto + ' valor: ' + carta2.valor);
    
   const somarCartasU = valorU1 + valorU2;
   alert(`Usuario - cartas (${cartaU1}) (${cartaU2}) - pontuação = (${somarCartasU})`);

   /**Primeira carta do computador */
   const cartaC = comprarCarta();
   const cartaC1 = cartaC.texto;
   const valorC1 = cartaC.valor;
   console.log('Computador cartas A: ' + cartaC.texto + ' valor: ' + cartaC.valor);

   /**Segunda carta do computador */
   const cartaCB = comprarCarta();
   const cartaC2 = cartaCB.texto;
   const valorC2 = cartaCB.valor;
   console.log('Computador cartas B: ' + cartaCB.texto + ' valor: ' + cartaCB.valor);
    
   /**Mostra o resultado em um alert */
   const somarCartasC = valorC1 + valorC2;
   alert(`computador - cartas (${cartaC1}) (${cartaC2}) - pontuação = (${somarCartasC})`);

   /**DECIDE O VENCEDOR*/
   if(somarCartasU === somarCartasC) {

      alert('Empate!');

   }else{

      if(somarCartasU > somarCartasC){

         alert('Usuario ganhou!');

      }else{

         alert('Computador ganhou!');

      }
   }
   
} else{

   console.log('O jogo acabou');

}
