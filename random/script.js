const userInput = document.querySelector("#username");
const h1Text = document.querySelector('h1');

userInput.addEventListener('input', function() {
    h1Text.innerText = "Welcome, " + userInput.value;

    // h1Text.innerText = "Enter Your Username";
    if (userInput.value === "") {
        h1Text.innerText = "Enter Your Username";//creating some issue :(
    }
});