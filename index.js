
//Get slider value 
let slider = document.getElementById("myRange");
let output = document.getElementById("transport-miles");
output.innerHTML = slider.value;

//Update current slider value 
slider.oninput = function() {
    output.innerHTML = this.value;
}
//convert to km to pass into carbon api
/*function convert() {
    var km = slider.value * 1.60934;
    console.log(km)
}
convert()*/
