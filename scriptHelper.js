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
   <li>Name: ${name}</li>
   <li>Diameter: ${diameter}</li>
   <li>Star: ${star}</li>
   <li>Distance from Earth: ${distance}</li>
   <li>Number of Moons: ${moons}</li>
</ol>
<img src="${imageUrl}">
`
            
}

function validateInput(testInput) {

 if (String(testInput) === "") {
     return "Empty"
 } else if (isNaN(Number(testInput))){
     return "Not a Number"
 } else {
     return "Is a Number"
 }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");
    }

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        alert("You must enter a valid input");
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("You must enter a valid input ln63");
    }

    
    let launchStatus = document.getElementById("launchStatus");

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerText = `Pilot ${pilot} is ready for launch.`

    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerText = `Copilot ${copilot} is ready for launch.`

    let fuelStatus = document.getElementById("fuelStatus")

    let cargoStatus = document.getElementById("cargoStatus");
    
    list = document.getElementById('faultyItems')
    list.style.visibility = "visible"
    
    if (fuelLevel < 10000){
        
        fuelStatus.innerText = "Fuel level too low for launch."
        launchStatus.innerText = "Shuttle not ready for launch."
        launchStatus.style.color = 'red'
    }
    
    if (cargoLevel > 10000){
        
        cargoStatus.innerText = "Cargo level too high to launch."
        launchStatus.innerText = "Shuttle not ready for launch."
        launchStatus.style.color = 'red'
    }
    
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.innerText = "Shuttle is ready for launch"
        cargoStatus.innerText = "Cargo level low enough to launch."
        fuelStatus.innerText = "Fuel level high enough for launch."
        launchStatus.style.color = "green"
    }

    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');

    planetsReturned = await planetsReturned.json();
    
    return planetsReturned;
}

function pickPlanet(planets) {
let randoPlanet = Math.floor(Math.random()*planets.length);  
return planets[randoPlanet]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
