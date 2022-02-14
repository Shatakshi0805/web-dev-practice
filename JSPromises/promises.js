// let button = document.querySelector("id");
// button.addEventListener("click", );

let delayedColorChange = (color, delay) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange("red", 1000)
// .then(() => delayedColorChange("yellow", 1000))
// .then(() => delayedColorChange("green", 1000))
// .then(() => delayedColorChange("blue", 1000))
// .then(() => delayedColorChange("orange", 1000))
// .then(() => delayedColorChange("violet", 1000))
// .then(() => delayedColorChange("indigo", 1000))

async function rainbowDisplay() {//async function returns a promise
    await delayedColorChange("red", 1000);//await works till this current call is not resolved
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("violet", 1000);
    await delayedColorChange("indigo", 1000);

    // resolve("DONE for async rainbowDisplay function!!!");//this msg must return to .then function when function resolves
    //means this async funcn rainbowDisplay is resolved as this also returns a promise
    return "DONE for async rainbowDisplay function!!!"//resolve func msg not working
}

rainbowDisplay().then(() => console.log("DONE!!!"));