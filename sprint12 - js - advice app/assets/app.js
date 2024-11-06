
const speak = (text) => {
    VoiceRSS.speech({
        key: '52bfbd75e1c24955831329926a53c5ed',
        src: text,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

const speakOnClick ( const el = document.getElementById('speak-button');

const text = 
document.getElementById("speak-text").value;
console.log(text)
)

const functionWhenDOMLoaded = () => {
   
    el.onclick = () => speak(text);
}

document.addEventListener("DOMContentLoaded", functionWhenDOMLoaded);