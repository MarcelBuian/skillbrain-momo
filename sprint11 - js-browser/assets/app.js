
const buttonClicked = (e) => {
    console.log(e.target);

    let elementId;

    if (e.target.tagName === 'STRONG') {
        elementId = e.target.parentElement.id;
    } else {
        elementId = e.target.id;
    }

    if (elementId === "button1") {
        alert('Azi e luni!');
    } else if (elementId === 'button2') {
        alert('Maine a marti!');
    }
}

const checkEnabledForTarget = (target) => {

    let enabled = target.value !== '';

    document.getElementById('checkboxInput').checked = enabled;


    document.getElementById('submitButton').disabled = !enabled;
}

const checkEnabledByEvent = (e) => {

    checkEnabledForTarget(e.target);
}

const myElementClicked = (e) => {
    console.log("Inainte de prevent default");
    e.preventDefault();
    console.log("Dupa prevent default");
}

const functionWhenDOMLoaded = (event) => {
    console.log("1. Hello, Skillbrain inceput de app.js");
    // document.getElementById("demo").innerHTML = "My First JavaScript";
    document.getElementById('url').value = location.href;
    document.getElementById('url-div').innerHTML = location.href;

    document.getElementById('buttonDivizibilCu10').addEventListener('click', functionEsteDivCuZece);
    // E acelasi lucru
    // document.getElementById('buttonDivizibilCu10').onclick = functionEsteDivCuZece;

    document.getElementById('button1').onclick = buttonClicked;
    document.getElementById('button2').onclick = buttonClicked;
    document.getElementById('myElement').onclick = myElementClicked;
    document.querySelector('input[type="submit"]').onclick = (event) => {
        event.preventDefault();
        console.log("Submit has been clicked!");
    }
    document.getElementById('fname').onkeyup = checkEnabledByEvent;
    checkEnabledForTarget(document.getElementById('fname'));

    document.getElementById('checkboxInput').onclick = (e) => e.preventDefault();
}

const setDemoContent = (content = "My First JavaScript") => {
    document.getElementById("demo").innerHTML = content;

    alert("Butonul a fost apasat!");
}

const functionConfirm = () => {
    console.log("Butonul demo a fost apasat!");
    const rezultat = confirm("Confirmi?");
    console.log(rezultat);
}

const functionPrompt = () => {
    console.log("Butonul prompt a fost apasat!");
    const number = prompt("Introduceti un numar");
    const esteDivizibil = isDivNumber(number);
    if (esteDivizibil) {
        alert("Numarul " + number + " este divizibil cu 10");
    } else {
        alert("Numarul " + number + " nu este divizibil cu 10");
    }
}


const functionEsteDivCuZece = (e) => {

    console.log(e);

    console.log("ScreenX = " + e.screenX);
    console.log("ScreenY = " + e.screenY);

    const number = document.getElementById("number").value;

    if (number === '') {
        alert("Introdu numarul inainte");
        return;
    }

    const esteDivizibil = isDivNumber(number);

    const text = `Numarul ${number} este divizibil cu 10? ${esteDivizibil}`;

    console.log(text);

    document.getElementById('rezultat').innerHTML = text;
}

const isDivNumber = (number) => number % 10 === 0;

// La final
document.addEventListener("DOMContentLoaded", functionWhenDOMLoaded);




console.log("2. Hello, Skillbrain sfarsit de app.js");



// todo:
// vorbim despre e.preventDefault();