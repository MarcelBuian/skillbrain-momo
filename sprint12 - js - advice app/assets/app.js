
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

const speakOnClick = () => {

    const text = document.getElementById("speak-text").value;
    console.log(text);  

    speak(text);
}

const functionWhenDOMLoaded = () => {
    const el = document.getElementById('speak-button');
    el.onclick = () => speakOnClick();

    document.getElementById('joke-button').onclick = () => tellAJoke();
}

const tellAJoke = () => {
    // Example of a GET request
    fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky,Christmas?type=twopart')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse JSON data from response
        return response.json(); 
    })
    .then(data => {
        // Handle the JSON data here
        console.log(data); 
        const question = data.setup;
        const answer = data.delivery;
        const text = question + "\n\n" + answer;
        const el = document.getElementById('speak-text');
        el.value = text;
        
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

}

document.addEventListener("DOMContentLoaded", functionWhenDOMLoaded);