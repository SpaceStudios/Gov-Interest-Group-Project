const slider = document.getElementById("donationSlider");
const donateButton = document.getElementById("donateButton");
const textInput = document.getElementById("donationAmount");

slider.addEventListener('input', (event) => {
    const value = slider.value;
    textInput.value = "$" + value;
    donateButton.value = "Donate: $" + value;
});

textInput.addEventListener('input', (event) => {
    const value = textInput.value;
    if (!value.startsWith("$") && value != "") {
        textInput.value = "$" + value;
    }
    numberValue = parseInt(value.replace("$", ""));;
    if (isNaN(numberValue)) {
        if (value.startsWith("$") || value == "") {
            numberValue = 10;
        } else {
            numberValue = 10;
        }
    } else {
        numberValue = parseInt(value.replace("$", ""));
        if (!(numberValue < 10)) {
            numberValue = Math.max(10, Math.min(100000, numberValue));
            textInput.value = "$" + numberValue;
        } else {
            numberValue = 10;
        }
    }
    slider.value = numberValue;
    donateButton.value = "Donate: $" + numberValue;
});

donateButton.addEventListener('click', () => {
    const value = slider.value;
    slider.value = 10;
    donateButton.value = "Donate:" + "$" + 10;
    slider.value = 10;
    textInput.value = "$" + 10;
    const response = document.getElementById("donateResponse");
    response.textContent = "Thank you for your donation of $" + value + "!";
    response.classList.remove("hidden");
    setTimeout(() => {
        response.classList.add("hidden");
    },5000);
});