//nr: 4 samf, engelsk 
var samfSubjects = ["Dansk polotik", "International politik","Økonomi","Sociologi","Metode","Sociale medier","Styreformer","Kina","Familietyper","Finanskrisen"]//nr: 3 fysik, biotek, 
var engSubjects = ["Retorik","New Zealand", "Africa","Post-modernisme","Dystopi", "Victorian age","Shakespeare","Nordamerika's historie","Racisme","Horror" ]
//nr: 3 fysik, biotek, 
var fysSubjects = ["Relativitetsteori","harmoniske svinginer","varme energi","aerodynamik","exoplaneter","Atomkraft","Mekanik","banekurver","Bølger","GPS-systemer","Ellære","Radioaktivitet","Mørkt stof","Kvantemekanik","Tyngdekraft","Intertimomenter","Vedvarende energi","Raketfysik"]
var btSubjects = ["Cloning", "Nanoteknologi","Genmodifikation","Kræftceller","Livstilssygdomme","Epidemier","radioaktivitet","Kønssygdomme","Nikotin"]
//nr: 2
var ifSubjects = ["funktioner", "animationer","IT-sikkerhed", "Hackere", "Sociale Medier", "Robot teknologi", "Talsystemer", "Kodesprog", "Computeren", "Kryptering", "Cloud/Database/Datalagring", "Programering"] //nr 2
var mathSubjects = ["differentialligninger", "vektorer i rummet", "Matrix", "Statestik", "Sandsynlighedsregning", "Vector funktioner", "Intergralrening", "Trigonomitriske funktioner", "Differentialregning", "Matematiske modeller", "Matematik i historien(græsk, egypten)", "Historiens matematikere"] //nr 2

var discs = ["Informatik",""];
var subs = ["", ""];
document.getElementById("answer").value = "";

//nr 3 og 4
var allSubjects = {
    //Add discipline
    "Informatik": ifSubjects,
    "Matematik": mathSubjects,
    "Samfundsfag":samfSubjects,
    "Engelsk": engSubjects,
    "Fysik": fysSubjects,
    "Bioteknologi": btSubjects,
}
//informatik removed
var allDisciplines = [ 
    "Matematik",
    "Samfundsfag",
    "Engelsk",
    "Fysik",
    "Bioteknologi",
]

/**nr 5
 * Generate a random discipline by choosing in allSubject
 * @return {string[]} A list of two discipline, the first is always
 * informatik, the second is random. 
 */
function randomDisciplines() {
    return ["Informatik", pickRandom(allDisciplines)];
}

/**
 * Picks a random element from array.
 * @param {any[]} anArray 
 * @returns {any} element
 */
function pickRandom(anArray){
    var randomIndex = Math.floor(Math.random() * allDisciplines.length);
    return anArray[randomIndex];
}

/** nr 6
 * Returns a list of two random subjects from the two giv en disciplines
 * @param {string[]} disciplinePair The two disciplines
 * @return {string[]} Two random subjects
 */
function randomSubjects(disciplinePair) {
    var subjects1 =  allSubjects[disciplinePair[0]];
    var subjects2 =  allSubjects[disciplinePair[1]];
    return [pickRandom(subjects1), pickRandom(subjects2)];
} 

//det må i selv finde ud af :))

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

function loadPrompt() {
    discs = randomDisciplines();
    subs = randomSubjects(discs);
    displayString = makePrompt(discs, subs);
    document.getElementById("prompt").innerHTML = displayString;
    document.getElementById("fag1").value = discs[0];
    document.getElementById("fag2").value = discs[1];
    document.getElementById("emne1").value = subs[0];
    document.getElementById("emne2").value = subs[1];        
}
loadPrompt();