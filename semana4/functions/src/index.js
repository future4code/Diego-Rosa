
/** EXERCÍCIO 1*/
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50

// (b) minhaFuncao(2) resultado = 10
//minhaFuncao(10) resultao = 50

//---------------------------------------------------

/**EXERCÍCIO 2 */
//(a) ira sair as strings "Darvas" e "Caio"

//(b)Seria impresso "Amanda" e "Caio" no console

//----------------------------------------------------

//Exercício 3
const metodo = (array) => {// cria uma constante metodo e aramzena o resultado da funçao array
    let arrayFinal = []; //cria um array vazio
  
    for (let x of array) { //acessa o indice o array
          if (x % 2 === 0) { // se indice do array for par
          arrayFinal.push(x * x) // pucha resultado da multiplicaão do indice(x) do array  multiplicado por  ele mesmo
          }
    }
  
    return arrayFinal; //retorna o resultado da multiplicação e o armazena na variael
  }

  // ------------------------------------------------------------
  //EXERCÍCIO 4
  function aboutMe (){
      console.log('Eu sou Diego, tenho 23 anos, moro em Hortolândia-SP e sou estudante.')
  }

  aboutMe();

  
  function aboutMe (nome, idade, cidade, ocupacao){

      const nome = "Diego";
      const idade = Number(23);
      const cidade = "Hortolândia";
      const estudante = true; 
      
      return 'Eu sou ' + nome + ' tenho ' + idade + ' moro em ' + cidade + estudante; 
        
    }

    const informacoes = aboutMe();

    console.log(informacoes);

        