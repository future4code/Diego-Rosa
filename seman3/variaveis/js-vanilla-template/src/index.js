
let perguntas = [
    prompt('Qual é o seu nome?'),
    prompt('Qual é a sua idade'),
    prompt('Onde você mora?'),
    prompt('Qual a cor do seu cabelo?'),
    prompt('Qual é a sua cor favorita?'),
]

console.log("Resposta:", perguntas[0]);
console.log("Resposta:", perguntas[1]);
console.log("Resposta:", perguntas[2]);
console.log("Resposta:", perguntas[3]);
console.log("Resposta:", perguntas[4]);

let comidaPreferida = [
    "Macarrao com frango",
    "Strogonof de frongo",
    "Pizza de frango",
    "Pure de batata",
    "Tapioca com frango"
]

console.log(comidaPreferida)
console.log("Essas são as minhas minhas comidas preferidas:", comidaPreferida[0]);
console.log(comidaPreferida[1]);
console.log(comidaPreferida[2]);
console.log(comidaPreferida[3]);
console.log(comidaPreferida[4]);

let preferidaUsuario= prompt("Qual é a sua comida preferida?");

comidaPreferida[1] = preferidaUsuario;

console.log(comidaPreferida[0]);
console.log(comidaPreferida[1]);
console.log(comidaPreferida[2]);
console.log(comidaPreferida[3]);
console.log(comidaPreferida[4]);

let trueOrFalse = [
    "Você esta sentado?",
    "Você estudou hoje?",
    "Você esta de chinelo?"
]

let respostasBoolean = [
    true,
    true,
    false
]

console.log(trueOrFalse[0] + " " + respostasBoolean[0]);
console.log(trueOrFalse[1] + " " + respostasBoolean[1]);
console.log(trueOrFalse[2] + " " + respostasBoolean[2]);


