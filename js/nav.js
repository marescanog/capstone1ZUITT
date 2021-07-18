// var navStart = document.getElementById("nav-start");
// var navProject = document.getElementById("nav-projects");
// var navTools = document.getElementById("nav-tools");
// var navContact = document.getElementById("nav-contact");

var navs = document.getElementsByClassName("c-svg-container-overlay");
var majorDots = document.getElementsByClassName("c-major-dot");

// console.log(navStart);
// console.log(navProject);
// console.log(navTools);
// console.log(navContact);
console.log(majorDots);

function setSelected(navType){
    for(var x = 0; x < navs.length; x++){
        if(navs[x].classList.contains("c-svg-selected")){
            navs[x].classList.remove("c-svg-selected");
        }
        if(majorDots[x].classList.contains("c-svg-selected")){
            majorDots[x].classList.remove("c-svg-selected");
        }
    }

    if(navType >= 0 && navType < navs.length){
        navs[navType].classList.add("c-svg-selected");
        majorDots[navType].classList.add("c-svg-selected");
    } else {
        navs[0].classList.add("c-svg-selected");
        majorDots[0].classList.add("c-svg-selected");
        navs[0].scrollIntoView();
        console.error("Invalid navtype please ipnut from 0 to 3 only");
    }
    
}