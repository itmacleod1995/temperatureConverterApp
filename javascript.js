let temperature = document.getElementById("temp");
let conversion = document.querySelector(".result");

let f = document.getElementById("fah");

function convert() {
    if (f.checked) {
        let newTemp = (parseFloat(temp.value) - 32) * (5 / 9);
        conversion.innerHTML = newTemp;
        document.querySelector(".text").innerHTML = " Degrees Celsius";
    } else {
        let newTemp = (parseFloat(temp.value) * 9 / 5) + 32;
        conversion.innerHTML = newTemp;
        document.querySelector(".text").innerHTML = " Degrees Fahrenheit";
    }
}
