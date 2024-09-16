const calculator = new Calculator();

document.addEventListener("DOMContentLoaded", function () {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operatorSelect = document.getElementById("operator");
    const resultDiv = document.getElementById("result");

    document.getElementById("calculate").addEventListener("click", function () {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operator = operatorSelect.value;

        let result;
        switch (operator) {
            case "+":
                result = calculator.add(num1, num2);
                break;
            case "-":
                result = calculator.subtract(num1, num2);
                break;
            case "*":
                result = calculator.multiply(num1, num2);
                break;
            case "/":
                result = calculator.divide(num1, num2);
                break;
            default:
                result = "Invalid operator";
        }

        resultDiv.innerText = `Result: ${result}`;
    });
});