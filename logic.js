loadPrompt(allSubjects);

function loadPrompt(allSubjects) {
    discs = randomDisciplines(allSubjects);
    subs = randomSubjects(discs, allSubjects);
    displayString = makePrompt(discs, subs);
    document.getElementById("prompt").innerHTML = displayString;
    document.getElementById("fag1").value = discs[0];
    document.getElementById("fag2").value = discs[1];
    document.getElementById("emne1").value = subs[0];
    document.getElementById("emne2").value = subs[1];        
}

/**nr 5
 * Generate a random discipline by choosing in allSubject
 * @return {string[]} A list of two discipline, the first is always
 * informatik, the second is random. 
 */
function randomDisciplines(allSubjects) {
    return ["Informatik", pickRandom(Object.keys(allSubjects))];
}

/**
 * Picks a random element from array.
 * @param {any[]} anArray 
 * @returns {any} element
 */
function pickRandom(anArray){
    var randomIndex = Math.floor(Math.random() * anArray.length);
    return anArray[randomIndex];
}

/** nr 6
 * Returns a list of two random subjects from the two giv en disciplines
 * @param {string[]} disciplinePair The two disciplines
 * @return {string[]} Two random subjects
 */
function randomSubjects(disciplinePair, allSubjects) {
    var subjects1 =  allSubjects[disciplinePair[0]];
    var subjects2 =  allSubjects[disciplinePair[1]];
    return [pickRandom(subjects1), pickRandom(subjects2)];
} 


/** nr 7
 * Make string that informs user of disciplines and subjects
 * @param {string[]} disciplinePair The two disciplines
 * @param {string[]} subs The two subjects
 * @return {string} En streng som fortæller fag of emner
 */
function makePrompt(disciplinePair, subs) {
    return "første fag er: " + disciplinePair[0] + " emnet er: " + subs[0] 
        + "andet fag er:" + disciplinePair[1] + " emnet er: " + subs[1];
}

