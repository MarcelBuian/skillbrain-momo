
// Varianta 2 imbunatatita

// functie clasica:
function get_welcome_message(firstName, lastName = "") {

    let message = `Bine ai venit, ${firstName}`;

    if (lastName === '') {
        // message = message + '!';
        // message += `!`;
        message = `${message}!`;

        return message;
    }

    return `${message} ${lastName}!`;
}

// functie arrow:
const get_message = (firstName, lastName = '') => {
    let message = `Bine ai venit, ${firstName}`;

    if (lastName === '') {
        message = `${message}!`;

        return message;
    }

    return `${message} ${lastName}!`;
}


const welcomeMessage1 = get_welcome_message("Andreea", "Dan");
const welcomeMessage2 = get_welcome_message("Andreea");
console.log(welcomeMessage1);
console.log(welcomeMessage2);


const welcomeMessage3 = get_message("Andreea", "Dan");
const welcomeMessage4 = get_message("Andreea");
console.log(welcomeMessage3);
console.log(welcomeMessage4);


