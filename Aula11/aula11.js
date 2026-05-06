
let imposto;

const salario = 2000;

// >= 2200 - 32%
// >= 1500 - 26%
// caso não se verifique nenhuma das outras 21%

if (salario >= 2200) {
  imposto = salario * 0.32;
} else if (salario >= 1500) {
  imposto = salario * 0.26;
} else {
  imposto = salario * 0.21;
}

//console.log("O valor do imposto é:",imposto);

//outra maneira de fazer: console.log(salario>=2200 ? salario*0.32 : salario>=1500 ? salario*0.26 : salario*0.21)