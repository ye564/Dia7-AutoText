const textEl = document.getElementById('text');
const Speed = document.getElementById('speed');
const text ='Hola soy yeferson';

let idx = 1 //posicion de cada letra del text
let speed = 400 / Speed.value //divide el timpo por las casillas de hay en el speadd velocidad

writeText();

function writeText(){
    textEl.innerText = text.slice(0, idx); // se ubuca el la ninea del tecto segin el slice

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText,speed) //la velocidad a la que queremos que salga el texto
}


Speed.addEventListener('input', (e) => speed = 400 / e.target.value);