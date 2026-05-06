
// INTRODUÇÃO AO JAVASCRIPT

// CRIAR VARIÁVEL

let nome = "Ana";
//const idade = 18;
//const IVA = 0.23;
let masculino = false;
let email;

nome = "João"

// Rascunhos para por a funcionar o terminal:

// node é o que permite seguir o javascript
// cd no treminal para mudar de pasta
// clear para apagar
// ls listar 
// pwd = Imprimir caminho
// para separar o string é a virgula ou o +

console.log("o valor guardado é",nome)

let primeiroNome = "João"
let ultimoNome = "David"

console.log(primeiroNome + " " + ultimoNome)

const precoBase = 100;
const IVA = 0.23;
const precoFinal =  precoBase + precoBase * IVA;
console.log(precoFinal)

// CONDICIONAIS

const idade = 22;

if (idade >= 18){
    console.log("Entras na disco")
} else {
    console.log("Não entras jovem")
}

// > MAIOR
// < MENOR
// >= <= MAIOR OU IGUAL / MENOR OU IGUAL
// || OU OR
// && E AND
// = ATRIBUIÇÃO
// == EQUIVALENTE
// === ESTRITAMENTE EQUIVALENTE
// != diferentes

7 == "7" // V
7 === "7"// F

const nota = 14;

// nota >= 18 - EXCELENTE
// nota >= 14 - BOM
// nota >= 10 - SUFICIENTE
// INSUFICIENTE
 
if(nota>=18){
    console.log("Excelente")
} else if(nota >= 14){
    console.log("Bom")
}if(nota>=18){
    console.log("Excelente")
} else if(nota >= 14){
    console.log("Bom")
} else if(nota >=10){
    console.log("Suficiente")
} else {
    console.log("Insuficiente")
}
 