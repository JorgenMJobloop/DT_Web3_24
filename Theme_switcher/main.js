const toggleButton = document.getElementById("toggleButton");
const calculatorButton = document.getElementById("calculate-button");


toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})

calculatorButton.addEventListener("click", () => {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const sum = number1 / number2;
    document.getElementById("result").textContent = sum;
})

