
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

const functionWhenDOMLoaded = () => {
    const el = document.getElementById('speak-button');

    el.onclick = () => speak("Hello World");
}

document.addEventListener("DOMContentLoaded", functionWhenDOMLoaded);