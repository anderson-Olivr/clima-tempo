 const key = "dcd0b8801a65423d604b674c73199ddf";


function coloca_dados(dados){
   document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"; 
   document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
   document.querySelector(".umidade").innerHTML = dados.main.humidity + "% de umidade";
   document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function busca_cidade(cidade){
   const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json());
   coloca_dados(dados);
}
 
function clica_bt() {
   const cidade = document.querySelector(".input-cidade").value;
   busca_cidade(cidade);
}

const music = document.getElementById("bg-music");
const btn = document.getElementById("sound-btn");

let isPlaying = false;

btn.addEventListener("click", () => {
   if (isPlaying) {
   music.pause();
   btn.textContent = "🔇"; // muda o ícone para sem som
   } else {
   music.play();
   btn.textContent = "🔊"; // muda o ícone para com som
   }
   isPlaying = !isPlaying;
});