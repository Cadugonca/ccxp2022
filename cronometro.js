const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "22 july 2024"

function countDown(){
   const datalanc = new Date(lancamento)
   const hoje = new Date()

   const segtotal = (datalanc - hoje)/1000;

   const finaldias = Math.floor(segtotal / 60/ 60 / 24);
   const finalhoras = Math.floor(segtotal / 60 / 60) % 24;
   const finalminutos = Math.floor(segtotal / 60) % 60;
   const finalsegundos = Math.floor(segtotal) % 60;

   dia.innerHTML = finaldias + "D" 
   hora.innerHTML = formatotempo(finalhoras) + "H"
   minuto.innerHTML = formatotempo(finalminutos) + "M"
   segundo.innerHTML = formatotempo(finalsegundos) + "S"

}

function formatotempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);