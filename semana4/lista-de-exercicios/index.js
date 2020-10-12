//EXERCÍCIO 1
//(a)
//Função conversor de moeda recebe o parametro valorEmDolar
//a variavel cotaçao recebe o valor digitado pelo usuario convertido em number
//retorna o valor em dolar multiplicado pela cotaçao informada pelo uasuaro
//aramzena o valor da multiplicaçao em meuDinheiro que é igual conersoDeMoeda o parametro valorEmDolar recebe 100
//imprime o resultado no console

//EXERCÍCIO (b) 
//funçao investeDinheiro recebe 2 parametros o tipoDeInvestimento e o valor a serem pultiplicados
//No switch case o usuario seleciona o tipoDeInvestimento desejado cada tipo e multipicado pelo valor informado no parametro e com um valor ja definido
//depois o valor apos o investimento é retornado
//supondo que o usuario quer investir em açoes , entao sera o valor das açoes multiplicado por 150 assim ocmo mostra no parametro
//no segundo funciona da mesma mandeira o valor do resouro direto e retornado  e multiplicado por 200
//depois tudo sera impresso no console

//EXERCÍCIO (c)
//array numeros recebe 14 numeros alguns pares e outros impares
//array1 e array2 foram declaradas arrays vazias 
//Para a vaiavel numero de array numeros 
//Se a variavel numero de array de numeros o resto da divisao for igual a zero
//Recebe um push de um numero par da variavel numero de array numeros 
//Se nao recebe um push de um numero impar da variavel numero do array de numeros 
//Exibe  no console a quantidade total de numeros que o array numeros possui que sao 14
//Exibe no console a quantidade total de numeros pares do array1 que são 6
//Exibe no console a quantidade toal de numeros impares do array2 que são 8

//EXERCÍCIO (d)
//array numeros rece 29 numres
//array numero um recebe o valor infinity
//array numero2 recebe o valor 0
//Para a variavel numero de array numeros
//se numero de array de numeros for menos que numero1
//numero1 recebe o valor de numero de array de numeros
//se nao, numero de array de numeros for menos que numero2
//numero2 recebe o valor de numeros de array de numeros
//Imprime no console o menor numero que é -10
//imrpime no console o maior numero que é 1590

//EXERCÍCIO 2 lógica de programação
//(a)//false
//(b) //false
//(c)//true
//(d)//false
//(e)//true

const quantidadeDeNumerosPares = ""
let i =0 ;
    while (i <= quantidadeDeNumerosPares) {
        quantidadeDeNumerosPares = i%2;
        if (quantidadeDeNumerosPares ==0){
            console.log("Par " + i);
        }
        i++;
    }
    console.log("FIM");