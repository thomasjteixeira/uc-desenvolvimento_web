function saudacao(nome, callback) {
  console.log("Olá, " + nome);
  callback();
}

function fim() {
  console.log("Tudo foi executado corretamente!");
}

saudacao("Estudante", fim);