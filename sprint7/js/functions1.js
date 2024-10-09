
// let nume = "Andreea";
// console.log("Bine ai venit, " + nume + "!");
// console.log("Bine ai venit, " + nume + "!");
// console.log("Bine ai venit, " + nume + "!");



// Varianta 1: avem functie care nu returneaza nimic:
// functie clasica:
function display_welcome_message(name) {
    console.log("Welcome to our course, " + name + "!");
    console.log("------");
}

// functia arrow (sageata):
display_welcome_message_arrow_function = (name) => console.log("Bine ai venit, " + name + "!");


let nume = "Andreea";
display_welcome_message(nume);
display_welcome_message(nume);
display_welcome_message(nume);
display_welcome_message("Constantin");
display_welcome_message(nume + " Dan");


display_welcome_message_arrow_function("Alin");
const student = "Alin";
display_welcome_message_arrow_function(student);

