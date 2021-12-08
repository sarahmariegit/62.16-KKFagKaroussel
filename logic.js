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
$("#answer").val("ans");

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
var allDiscs = [ 
    "Matematik",
    "Samfundsfag",
    "Engelsk",
    "Fysik",
    "Bioteknologi",
]

/**nr 5
 * Generate a random discipline by choosing in allSubject
 * @return {string[]} discs A list of two discipline, the first is always
 * informatik, the second is random. 
 */
function randomDisciplines() {
    var nDiscs = allDiscs.length;
    var randomIndex = Math.floor(Math.random()*nDiscs);
    var otherDisc = allDiscs[randomIndex]; 
    var discs = ["Informatik", otherDisc];
    return discs;
}

/** nr 6
 * Returns a list of two random subjects from the two giv en disciplines
 * @param {string[]} discs The two disciplines
 * @return {string[]} Two random subjects
 */
function randomSubjects(discs) {
    var subjects1 =  allSubjects[discs[0]];
    var subjects2 =  allSubjects[discs[1]];
    var randomIndex1 = Math.floor(Math.random()*subjects1.length);
    var randomIndex2 = Math.floor(Math.random()*subjects2.length);
    var subjects = [subjects1[randomIndex1], subjects2[randomIndex2]];
    return subjects;
} 

//det må i selv finde ud af :))

/** nr 7
 * Make string that informs user of disciplines and subjects
 * @param {string[]} discs The two disciplines
 * @param {string[]} subs The two subjects
 * @return {string} En streng som fortæller fag of emner
 */
function makePrompt(discs, subs) {

    return "første fag er: " + discs[0]+ " emnet er: " + subs[0] +
        "andet fag er:" + discs[1]+ " emnet er: " + subs[1];
}

function loadPrompt() {
    discs = randomDisciplines();
    subs = randomSubjects(discs);
    displayString = makePrompt(discs, subs);
    $("#prompt").html(displayString);
    $("#fag1").val(discs[0]);
    $("#fag2").val(discs[1]);
    $("#emne1").val(subs[0]);
    $("#emne2").val(subs[1]);        
}
loadPrompt();