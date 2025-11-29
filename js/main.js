document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsiusInput');
    const converButton = document.getElementById('converButton');
    const kelvinOutput = document.getElementById('kelvinOutput');
    const fahrenheitOutput = document.getElementById('fahrenheitOutput');
    const errorMessage = document.getElementById('errorMessage');

    const KELVIN_OFFSET = 273.15;
    const FAHRENHEIT_MULTIPLIER = 9 / 5;
    const FAHRENHEIT_OFFSET = 32;

    const clearResults = () => {
        kelvinOutput.textContent = 'Grados Kelvin: ';
        fahrenheitOutput.textContent = 'Grados Fahrenheit: ';
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
    };

    const convertTemperature = () => {
        clearResults();

        const inputStr = celsiusInput.value.trim();
        const celsiusValue = parseFloat(inputStr);

        if (inputStr === '' || isNaN(celsiusValue)) {
            errorMessage.textContent = 'Por favor, ingrese un valor numérico válido para Celsius.';
            errorMessage.style.display = 'block';
            celsiusInput.value = '';
            return;
        }

        const kelvinValue = celsiusValue + KELVIN_OFFSET;
        const fahrenheitValue = (celsiusValue * FAHRENHEIT_MULTIPLIER) + FAHRENHEIT_OFFSET;

        console.log("Conversion exitosa:");
        console.log(`Celsius (°C): ${celsiusValue.toFixed(2)}`);
        console.log(`Grados Kelvin:${kelvinValue.toFixed(2)}`);
        console.log(`Grados Fahrenheit: ${fahrenheitValue.toFixed(2)}`);

        kelvinOutput.textContent = `Grados Kelvin: ${kelvinValue.toFixed(2)} °K`;
        fahrenheitOutput.textContent = `Grados Fahrenheit: ${fahrenheitValue.toFixed(2)} °F`;
    };

    converButton.addEventListener('click', convertTemperature);
});