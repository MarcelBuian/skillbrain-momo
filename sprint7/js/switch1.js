function get_day_of_week_as_string(n) {
    let text;
    switch (n) {
        case 1:
            text = "Luni";
            break;
        case 2:
            text = "Marti";
            break;
        case 3:
            text = "Miercuri";
            break;
        case 4:
            text = "Joi";
            break;
        case 5:
            text = "Vineri";
            break;
        case 6:
            text = "Sambata";
            break;
        case 7:
            text = "Duminica";
            break;
        default:
            text = "Necunoscut";
            break;
    }

    return text;
}

let dayNumber;
let dayString;

dayNumber = 5;
dayString = get_day_of_week_as_string(dayNumber);

console.log("Ziua cu numarul " + dayNumber + " este: " + dayString);