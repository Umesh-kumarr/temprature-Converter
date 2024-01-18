const temperature = document.querySelector(".temprature input");
const result = document.querySelector(".result input");
const inputTempratureUnit = document.querySelector(".temprature select");
const resultTempratureUnit = document.querySelector(".result select");

temperature.oninput = function(){
    let inputTempratureUnitValue = inputTempratureUnit.value;
    let resultTempratureUnitValue = resultTempratureUnit.value;

    //from Celicius To Other Units
    let CelciusToKelvin = inputTempratureUnitValue === "celcius" && resultTempratureUnitValue=== "Kelvin";
}