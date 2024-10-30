const functionWhenDOMLoaded = (event) => {
    console.log("1. Hello, Skillbrain inceput de app.js");
    // document.getElementById("demo").innerHTML = "My First JavaScript";
    document.getElementById('url').value = location.href;
    document.getElementById('url-div').innerHTML = location.href;

    document.getElementById('buttonDivizibilCu10').addEventListener('click', functionEsteDivCuZece);
    // E acelasi lucru
    // document.getElementById('buttonDivizibilCu10').onclick = functionEsteDivCuZece;
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