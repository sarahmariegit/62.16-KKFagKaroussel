var ifSubjects = ["funktioner", "animationer"]
var mathSubjects = ["differentialligninger", "vektorer i rummet"]
//Add new subject list
var discs = ["af","bf"];
var subs = ["a", "b"];
$("#answer").val("ans");

var allSubjects = {
    //Add discipline
    "Informatik": ifSubjects,
    "Matematik": mathSubjects,
}

/**
 * Returns a list of two random subjects from the two given disciplines
 * @param {string[]} discs the two disciplines
 * @return {string[]} two random subjects
 */
function randomSubjects(discs) {

    return ["differentialligninger", "animationer"];
}

/**
 * Generate a random discipline by choosing in allSubject
 * @return {string[]} discs A list of two discipline, the first is always
 * informatik, the second is random. 
 */
function randomDisciplines() {

    return ["Informatik", "Matematik"];
}

/**
 * Make string that informs user of disciplines and subjects
 * @param {string[]} discs The two disciplines
 * @param {string[]} subs The two subjects
 * @return {string} En streng som fortæller fag of emner
 */
function makePrompt(discs, subs) {

    return ""
}

function loadPrompt() {
    discs = randomDisciplines();
    subs = randomDisciplines(discs);
    displayString = makePrompt(discs, subs);
    $("#prompt").html(displayString);
}

function submitPressed() {
    var description = $("#answer").val();
    var resp = {
        "emne1": subs[0],
        "emne2": subs[1],
        "fag1": discs[0],
        "fag2": discs[1],
        "beskrivelse": description, 
    };
    fetch("https://matquiz.dk/srpAi", {
        method: "POST",
        body: JSON.stringify(resp),
    })
    loadPrompt();
}

loadPrompt();