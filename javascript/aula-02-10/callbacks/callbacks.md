# Callbacks em JavaScript

## O que é um Callback?
Um _callback_ é uma função que é passada como argumento para outra função, sendo então executada depois de algum evento ou resposta. Em JavaScript, funções são objetos e, portanto, podem ser passadas como argumentos para outras funções.

## Como os Callbacks são Utilizados?
Callbacks são frequentemente utilizados em operações assíncronas, como leituras de arquivos ou requisições HTTP, para lidar com o resultado de uma operação uma vez que ela seja concluída.

### Exemplo Básico de um Callback
```javascript
function saudacao(nome, callback) {
    console.log("Olá, " + nome);
    callback();
}

function fim() {
    console.log("Tudo foi executado corretamente!");
}

saudacao("Estudante", fim);
```

Neste exemplo, a função fim é chamada após a função saudacao ser executada, demonstrando um uso básico de callback.