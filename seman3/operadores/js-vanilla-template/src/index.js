/*
RESPOSTAS (1):

A - falso

B - falso

C - true

D - booleano


RESPOSTAS (2):

A -  undefined

B - null

C - 11

D - 3

E - 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

F. 9

*/ 


/*(2)*/ 
const whatAge = Number(prompt('Qual é a sua idade?'));
const whatAgeFriend = Number(prompt('Qual a idade do seu melhor amigo(a)?'));
let toCompare = whatAge >= whatAgeFriend; 
console.log('A sua idade é maior do que a do seu amigo? ' + toCompare );

const diference = (whatAge - whatAgeFriend);
console.log('A diferença de idade é de ' + diference + ' anos');

let evenNumber = Number(prompt('Digite um número par'));
console.log("O resto da divisão é " + evenNumber % 2)  ;

/*Notei que o resto da divisão de numeros pares sempre imprime 0*/

/*Se o usuário inserir um numero impar sempre vai restar 1*/ 

/**(3) */

let listaDeTarefas = [];
listaDeTarefas.push(prompt('Qual é a primeira das 3 tarefas que você precisa realizar hoje?'));
listaDeTarefas.push(prompt('Qual é a segunda das 3 tarefas que você precisa realizar hoje?'));
listaDeTarefas.push(prompt('Qual é a terceira das 3 tarefas que você precisa realizar hoje?'));
console.log(listaDeTarefas);

var indiceUser = listaDeTarefas[Number(prompt('Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2'))];
listaDeTarefas.splice(indiceUser, 2);
console.log(listaDeTarefas);
const userName = prompt('Qual é o seu nome?')
const userEmail = prompt('Qual é seu email?');
console.log('O e-mail ' + userEmail + ' foi cadastrado com sucesso. Seja bem-vindo(a), ' + userName );
