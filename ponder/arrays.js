//  arrays.js

// A1 Map
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`
};
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

// A2 Map
const grades = ["A", "B", "C"];

function convertToPts(grades) {
    switch (grades) {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        default:
            return 0;
    }
}

const gpaPoints = grades.map(convertToPts);
console.log(gpaPoints);

// A3 Reduce