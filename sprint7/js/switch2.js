function get_day_of_week_as_string(n) {
    if (typeof n !== 'number') {
        return "Parametrul n (" + n + ") trebuie sa fie un numar!";
        // throw "Numarul primit n (" + n + ") trebuie sa fie un numar!";
    }

    switch (n) {
        case 1:
            return "Luni";
        case 2:
            return "Marti";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sambata";
        case 7:
        case 0:
            return "Duminica";
        default:
            return "Necunoscut";
    }
}

function display_week_info_of_the_day(dayNumber) {
    const dayString = get_day_of_week_as_string(dayNumber);
    console.log("Ziua cu numarul " + dayNumber + " este: " + dayString);
}

display_week_info_of_the_day(0);
display_week_info_of_the_day(1);
display_week_info_of_the_day(2);
display_week_info_of_the_day(3);
display_week_info_of_the_day(4);
display_week_info_of_the_day(5);
display_week_info_of_the_day(6);
display_week_info_of_the_day(7);
display_week_info_of_the_day(8);
display_week_info_of_the_day("doi");
display_week_info_of_the_day("trei");