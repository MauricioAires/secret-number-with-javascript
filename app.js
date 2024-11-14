alert("Boas vindas ao jogo do número secreto");

const intervalo = 100;

let numeroSecreto = parseInt(Math.random() * intervalo) + 1;

console.log("Número secreto: " + numeroSecreto);

let chute;
let tentativas = 1;


// Enquanto o chute não for igual ao número secreto, o jogo continua
while(chute !== numeroSecreto){

  chute = Number(prompt(`Escolha um número entre 1 e ${intervalo}`));

  console.log("Executando")

  // se o chute for igual o número secreto
  if(chute === numeroSecreto){
    break;
  } else {
    tentativas++;
    // se o chute for maior ou menor do que o número secreto
    if(chute > numeroSecreto){
      alert(`O número secreto é menor que: ${chute}`);
    }else {
      alert(`O número secreto é maior que: ${chute}`);
    }
  }
}

// Operador ternário
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativas}.`);


