// Write your JavaScript code here!

window.addEventListener("load", function() {
let form = document.querySelector("form") 
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) { 
       listedPlanets = result;
   }).then(function(){
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image)
   })

  

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuelLevelInput.value;
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = cargoMassInput.value;
    let list = document.getElementById('faultyItems');

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });
  });