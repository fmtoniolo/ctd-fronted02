let pontosUsuario = 0;
let pontosBot = 0;

function winner () {
  if (pontosBot === 2) alert("Bot fez dois pontos.\n Venceu a partida!");
  if (pontosUsuario === 2) alert("Usuário fez dois pontos.\n Venceu a partida!");   
}

do {
  let escolhaUsuario = parseInt(prompt("1 - Pedra, 2 - Papel, 3 - Tesoura"));
  let escolhaBot = parseInt(Math.random() * 3 + 1);
  switch (escolhaUsuario) {
    case 1:
      if (escolhaBot === 1) console.log("Usuário: Pedra | Bot: Pedra\nEmpate!");
      else if (escolhaBot === 2) {
        console.log("Usuário: Pedra | Bot: Papel\nBot ganhou!");
        pontosBot++;
      } else if (escolhaBot === 3) {
        console.log("Usuário: Pedra | Bot: Tesoura\nUsuário ganhou!");
        pontosUsuario++;
      }
      break;
    case 2:
      if (escolhaBot === 1) {
        console.log("Usuário: Papel | Bot: Pedra\nUsuário ganhou!");
        pontosUsuario++;
      } else if (escolhaBot === 2)
        console.log("Usuário: Papel | Bot: Papel\nEmpate!");
      else if (escolhaBot === 3) {
        console.log("Usuário: Papel | Bot: Tesoura\nBot ganhou!");
        pontosBot++;
      }
      break;
    case 3:
      if (escolhaBot === 1) {
        console.log("Usuário: Tesoura | Bot: Pedra\nBot ganhou!");
        pontosBot++;
      } else if (escolhaBot === 2) {
        console.log("Usuário: Tesoura | Bot: Papel\nUsuário ganhou!");
        pontosUsuario++;
      } else if (escolhaBot === 3)
        console.log("Usuário: Tesoura | Bot: Tesoura\nEmpate!");
      break;
    default:
      console.log(
        "Você digitou: " +
          escolhaUsuario +
          "\nEscolha uma opção válida (1, 2, ou 3)."
      );
      break;
  }
winner();
} while (pontosBot < 2 && pontosUsuario < 2);
