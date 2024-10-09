
// Varianta 2: avem o functie care returneaza ceva (text):

// functie clasica:
function get_welcome_message(firstName, lastName = "") {
    // return "Welcome to our course, " + firstName + " " + lastName + "!";
    return `Welcome to our course ${firstName} ${lastName}!`;
}

// functie arrow:
// const get_message = (firstName, lastName = '') => "Welcome to our course, " + firstName + " " + lastName + "!";
const get_message = (firstName, lastName = '') => `Welcome to our course, ${firstName} ${lastName}!`;

let prenume = "Andreea";
let nume = "Dan";

const welcomeMessage = get_welcome_message(prenume, nume);
console.log(welcomeMessage);
console.log(welcomeMessage);
console.log(welcomeMessage);

console.log(get_welcome_message("Alin"));


console.log(get_message("Dana"));



