const inputEl = document.getElementById("input-el");
const outputOne = document.getElementById("output-1");
const outputTwo = document.getElementById("output-2");
const outputThree = document.getElementById("output-3");
const convertBtn = document.querySelector("#convert-btn");
let inputElValue = 0;

inputEl.addEventListener("input",adjustInputElWidth)

convertBtn.addEventListener("click", renderCalculation);

// This is to dynamically adjust the size of the input element width.
function adjustInputElWidth(){
    inputElValue = inputEl.value
    if (inputElValue.length > 2){
        inputEl.style.width = `${95 + (String(inputElValue).length - 1) * 30}px` 
    } else {
        inputEl.style.width = "95px";
    }
}

function renderCalculation(){
    if(inputElValue){
        let meters_to_feet = (Number(inputElValue) * 3.2808399).toFixed(3);
        let feet_to_meters = (Number(inputElValue) / 3.2808399).toFixed(3);
        outputOne.textContent = `${inputElValue} meters = ${meters_to_feet} feet | ${inputElValue} feet = ${feet_to_meters} meters`;
        
        let liters_to_gallons = (Number(inputElValue) * 0.26417205).toFixed(3);
        let gallons_to_liters = (Number(inputElValue) / 0.26417205).toFixed(3);
        outputTwo.textContent = `${inputElValue} liters = ${liters_to_gallons} gallons | ${inputElValue} gallons = ${gallons_to_liters} liters`;
        
        let kilos_to_pounds = (Number(inputElValue) * 2.20462262).toFixed(3);
        let pounds_to_kilos = (Number(inputElValue) / 2.20462262).toFixed(3);
        outputThree.textContent = `${inputElValue} kilos = ${kilos_to_pounds} pounds | ${inputElValue} pounds = ${pounds_to_kilos} kilos`;
    } else {
        outputOne.textContent = "0 meters = 0.0 feet | 0 feet = 0.0 meters";
        outputTwo.textContent = "0 liters = 0.0 gallons | 0 gallons = 0.0 liters"
        outputThree.textContent = "0 kilos = 0.0 pounds | 0 pounds = 0.0 kilos"
    }
}
