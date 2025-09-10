const key = "dcd0b8801a65423d604b674c73199ddf";
const input = document.querySelector(".input-cidade"); // necessário

function coloca_dados(dados){
   document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"; 
   document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
   document.querySelector(".umidade").innerHTML = dados.main.humidity + "% de umidade";
   document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;   
}

async function busca_cidade(cidade){
   const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
       .then(resposta => resposta.json());
   coloca_dados(dados);
}
 
function clica_bt() {
  const cidade = input.value;
  busca_cidade(cidade);
}

// atalho do Enter
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const cidade = input.value; // pega o valor atual
    busca_cidade(cidade);
  }
});
