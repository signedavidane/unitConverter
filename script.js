const btnEl = document.querySelector("#convert-btn"); 
const inputEl = document.querySelector("input"); // no # because using the element by its name
const lengthEl = document.querySelector("#length-unit"); // For the p element to display values
const volumeEl = document.querySelector("#volume-unit"); // For the p element to display values
const massEl = document.querySelector("#mass-unit"); // For the p element to display values

// Click convert button to display converted values, enough with one function
btnEl.addEventListener("click", function() { 
  convert(inputEl.value);
})

// Convert units
function convert(input) {
  //Covert meters to feet/feet to meters
  let m = (input / 3.28).toFixed(3)
  let feet = (input * 3.28).toFixed(3)
  lengthEl.innerHTML = `${input} meters = ${feet} feet | ${input} feet = ${m} meters`
  // Covert liters to gallons/gallons to liters
  let liters = (input / 0.264).toFixed(3)
  let gallons =  (input * 0.264).toFixed(3)
  volumeEl.innerHTML = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
  // Covert kilograms to pounds/pounds to kilograms
  let kilos = (input / 2.20).toFixed(3)
  let pounds =  (input * 2.20).toFixed(3)
  massEl.innerHTML = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`
}



// Keep the coursor blinking within input field for easier value entry
// Press enter for converting, connecting it with 'convert' button






