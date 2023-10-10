
function convertToFar() {
    const celsiusInput = document.getElementById("celsiusInput");
    const resultText = document.getElementById("resultText1");

    const celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
        alert("Please enter a valid number for Celsius.");
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    resultText.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("resultText2").textContent= "";
}

function convertToCel() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const resultText = document.getElementById("resultText2");

    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheit)) {
        alert("Please enter a valid number for Fahrenheit.");
        return;
    }

    const celsius = (fahrenheit - 32) * 5/9;
    resultText.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    document.getElementById("celsiusInput").value = "";
    document.getElementById("resultText1").textContent="";

}





