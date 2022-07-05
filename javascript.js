let temperature = document.getElementById("temp");
let conversion = document.querySelector(".result");

let f = document.getElementById("fah");
let c = document.getElementById("cel");
console.dir(f);

function convert() {
    if (f.checked) {
        let newTemp = (parseInt(temp.value) - 32) * (5 / 9);
        conversion.innerHTML = newTemp;
    }
}
