function getName() {

    var year = parseInt(document.getElementById("YY").value);
    var month =parseInt(document.getElementById("MM").value);
    var day = parseInt(document.getElementById("DD").value);
    var date = new Date(`${year}-${month-1}-${day}`);
    var date = new Date(year, month-1, day);
    var dob = date.getDay();
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    var Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    if (male.checked == false && female.checked == false) {
        alert("ERROR! Form cannot be blank.");
    }
    else if (year == "" || year.length < 4 || year.length > 4){
        alert("INCORRECT! Try again.");
    }
    else if (month < 1 || month > 12 || month == 2 && day > 29 ){
        alert("INCORRECT! Try again.");
    }
    else if( day < 1 || day >31) {
        alert("Incorrect! Try again.");
    }
    else if (male.checked === true) {
        alert("Yo!, " + " Your AKAN name is " + maleNames[dob] + " because you were born on a " + Weekdays[dob]);
    } else {
        alert("Yo!, " + " Your AKAN name is " + femaleNames[dob] + " because you were born on a " + Weekdays[dob]);
    }

}
