document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsiusInput');
    const converButton = document.getElementById('converButton');
    const celsiusDisplay = document.getElementById('celsiusDisplay');
    const kelvinOutput = document.getElementById('kelvinOutput');
    const fahrenheitOutput = document.getElementById('fahrenheitOutput');
    const errorMessage = document.getElementById('errorMessage');

    const KELVIN_OFFSET = 273.15;
    const FAHRENHEIT_MULTIPLIER = 9 / 5;
    const FAHRENHEIT_OFFSET = 32;

    const clearResults = () => {
        celsiusDisplay.textContent = 'Celsius: ';
        kelvinOutput.textContent = 'Kelvin: ';
        fahrenheitOutput.textContent = 'Fahrenheit: ';
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
    };

    const convertTemperature = () => {
        clearResults();

        const inputStr = celsiusInput.value.trim();
        const celsiusValue = parseFloat(inputStr);

        if (inputStr === '' || isNaN(celsiusValue)) {
            console.log(`ERROR: Escribe un número, se recibió:  "${inputStr}"`);
            errorMessage.style.display = 'block';

            celsiusInput.value = '';
            return;
        }

        const kelvinValue = celsiusValue + KELVIN_OFFSET;
        const fahrenheitValue = (celsiusValue * FAHRENHEIT_MULTIPLIER) + FAHRENHEIT_OFFSET;

        console.log("Conversion exitosa:");
        console.log(`Celsius: ${celsiusValue.toFixed(2)}`);
        console.log(`Kelvin: ${kelvinValue.toFixed(2)}`);
        console.log(`Fahrenheit: ${fahrenheitValue.toFixed(2)}`);

        celsiusDisplay.textContent = `Celsius: ${celsiusValue.toFixed(2)} °C`;
        kelvinOutput.textContent = `Kelvin: ${kelvinValue.toFixed(2)} K`;
        fahrenheitOutput.textContent = `Fahrenheit: ${fahrenheitValue.toFixed(2)} °F`;
    };

    converButton.addEventListener('click', convertTemperature);

});