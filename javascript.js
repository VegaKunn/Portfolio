var mudar = 1;
var mainDiv = document.querySelector("#trade");
var tituloH2 = document.querySelector("#tradeH2");
var bnt = document.querySelector("#dT");
var txtBotao = document.querySelector("#textoBotao");
var par = document.querySelector("#tradeP");

function trocar() {
  if (mudar == 1) {
    txtBotao.textContent = "Node";
    mainDiv.classList = "react";
    tituloH2.textContent = "React.js";
    par.textContent =
      "Minha principal skill é o desenvolvimento front-end com HTML, CSSe Javascript puro, lidando com o projeto desde a criação até amanutenção sem precisar de dependencias externas conhecendo a base do front-end puro.";
    bnt.classList = "divTrocar2";
    mudar++;
  } else if (mudar == 2) {
    txtBotao.textContent = "Native";
    mainDiv.classList = "node";
    tituloH2.textContent = "Node.js";
    par.textContent =
      "Conhecimento em Node.js para criação de rotas e manipulação de arquivos em Back-end fazendo integração com banco de dados relacionais e não relacionais usando como linguagem o MySQL e o Mongo.DB respectivamente.";
    bnt.classList = "divTrocar3";
    mudar++;
  } else if (mudar == 3) {
    txtBotao.textContent = "HTML";
    mainDiv.classList = "native";
    tituloH2.textContent = "React Native";
    par.textContent =
      "Criação de interfaces ageis e responsivas para Apps Android e IOS, fazendo bom uso de gerenciamente de memoria e recursos do aparelho para garantir performance em todas as aplicações.";
    bnt.classList = "divTrocar4";
    mudar++;
  } else if (mudar == 4) {
    txtBotao.textContent = "React";
    mainDiv.classList = "ht";
    tituloH2.textContent = "Desenvolvimento Web Puro";
    par.textContent =
      "Minha principal skill é o desenvolvimento front-end com HTML,CSS e Javascript puro, lidando com o projeto desde a criação até a manutenção sem precisar de dependencias externas conhecendo a base do front-end puro.";
    bnt.classList = "divTrocar";
    mudar = 1;
  }
}

setInterval(trocar, 10000);
