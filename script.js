// Accessing all the range sliders 

const redSliderEl=document.querySelector("#red-slider");
const greenSliderEl=document.querySelector("#green-slider");
const blueSliderEl=document.querySelector("#blue-slider");

// Accessing the rgb-value tag 
const rgbValueEl=document.querySelector("#rgb-value");

// function mycolorGenerator that will generate the color on moving the sliders 

function mycolorGenerator(){
    // Storing the current slider color value in variables 
    var red=redSliderEl.value;
    var green=greenSliderEl.value;
    var blue=blueSliderEl.value;
    var color='rgb('+red+','+green+','+blue+')';
    // Chaging the rgbvalue by current value
    rgbValueEl.innerText=color;

    // Changing the body color with current rgb value
    document.body.style.backgroundColor=color;
}

// adding the event listener to all range slider 
// as we move the slider the vlaue of rgb vlaue will change

redSliderEl.addEventListener("input",mycolorGenerator);
greenSliderEl.addEventListener("input",mycolorGenerator);
blueSliderEl.addEventListener("input",mycolorGenerator);