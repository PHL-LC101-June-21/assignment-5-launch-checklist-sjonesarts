// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
let div = document.getElementById("missionTarget")
div.innerHTML = `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[missionDestination].name}</li>
   <li>Diameter: ${json[missionDestination].diameter}</li>
   <li>Star: ${json[missionDestination].star}</li>
   <li>Distance from Earth: ${json[missionDestination].distance}</li>
   <li>Number of Moons: ${json[missionDestination].moons}</li>
</ol>
<img src="${json[missionDestination].image}">
`
            
}

function validateInput(testInput) {

 if (testInput === "") {
     return "Empty"
 } else if (typeof testInput === number){
     return "Is a Number"
 } else if (isNaN(testInput)){
     return "Not a Number"
 }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    form = document.querySelector("launchForm");
    pilot = document.querySelector("input[name=pilotName]");
    copilot = document.querySelector("input[name=copilotName]");
    fuelLevel = document.querySelector("input[name=fuelLevel]");
    cargoLevel = document.querySelector("input[name=cargoLevel]");
    list = document.getElementById('faultyItems')

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel === "Empty" ) || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");
    }

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        alert("You must enter a valid input");
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("You must enter a valid input");
    }

    
    let launchStatus = document.getElementById("launchStatus");

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerText = `Pilot ${pilot} is ready for launch.`

    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerText = `Copilot ${copilot} is ready for launch.`

    let fuelStatus = document.getElementById("fuelStatus")

    let cargoStatus = document.getElementById("cargoStatus");

    if (fuelLevel < 10000){
        list.style.visibility = visible;
        fuelStatus.innerText = "Fuel level too low for launch."
        launchStatus.innerText = "Shuttle not ready for launch."
        launchStatus.style.color = 'red'
    }
    
    if (cargoLevel > 10000){
        list.style.visibility = visible;
        cargoStatus.innerText = "Cargo level too high to launch."
        launchStatus.innerText = "Shuttle not ready for launch."
        launchStatus.style.color = 'red'
    }
    
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.innerText = "Shuttle is ready for launch"
        launchStatus.style.color = "green"
    }

    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
    response.json()})
    
    return planetsReturned;
}

function pickPlanet(planets) {
    console.log(planets)
    return Math.floor(Math.random()*planets.length);  
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
