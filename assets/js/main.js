let aQE = document.getElementById("aqeValue");
let healthConcern = document.getElementById("hConcern");
let healthEffect = document.getElementById("hEffect");
let x = document.getElementById("rangeAir")
function checkAirQuality() {
    if (x.value <= 50) {
        console.log(x.value);
        aQE.innerHTML = x.value;
        healthConcern.innerHTML = ` Good`;
        healthEffect.innerHTML = ` Little or no risk`;
        document.body.style.backgroundColor = "green";
    } else if (x.value > 50 && x.value <= 100) {
        console.log(x.value);
        aQE.innerHTML = x.value;
        healthConcern.innerHTML = ` Moderate`;
        healthEffect.innerHTML = ` Acceptable quality`;
        document.body.style.backgroundColor = "yellow";
    } else {
        console.log(x.value);
        aQE.innerHTML = x.value;
        healthConcern.innerHTML = `  Unhealthy for sensitive groups`;
        healthEffect.innerHTML = ` Generable publics not likely affected`;
        document.body.style.backgroundColor = "red";
    }
}