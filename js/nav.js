var navStart = document.getElementById("nav-start");
var navProject = document.getElementById("nav-projects");
var navTools = document.getElementById("nav-tools");
var navContact = document.getElementById("nav-contact");

// console.log(navStart.getBoundingClientRect() );
// console.log(navProject.getBoundingClientRect() );
// console.log(navTools.getBoundingClientRect() );
// console.log(navContact.getBoundingClientRect() );

var navs = document.getElementsByClassName("c-svg-container-overlay");
var majorDots = document.getElementsByClassName("c-major-dot");
var movingDot = document.getElementById("moving-dot");
var scrollContainer = document.getElementById("scroll-container");


var scrollElements = document.getElementsByClassName("c-scroll-snap-child");
console.log(scrollElements[1].scrollTop);

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


var lastScrollTop = 0;

var oldDotPosition = movingDot.getBoundingClientRect().top;
console.log(oldDotPosition);
/* Dot moves as ScrollBar moves */
scrollContainer.addEventListener('scroll', () =>{
    const currentScrollValue = scrollContainer.scrollTop;

    // These only need to be computed once, move variables out (Only Chnage when window Resize is detected);
    const totalScrollHeight= scrollContainer.scrollHeight - window.innerHeight;

    // Get Current Scroll Percentage (The range result is 0 - 1)
    const currentScrollPercentage = Math.round(((currentScrollValue/totalScrollHeight) + Number.EPSILON) * 100)/100;

    // Get Range Conversion of the Nav Distance (Distance is 260)
    const navBarAdd = currentScrollPercentage*260;


//console.log(oldDotPosition + " + " + dotMoveValue + " =" );
    // find out if scrolling up or down
    if (currentScrollValue > lastScrollTop){
        // Scrolling Down
        movingDot.style.top =  (0 + navBarAdd) + "px" ;
    } else {
        // Scrolling Up
        movingDot.style.top =  (0 + navBarAdd) + "px" ;
    }
    lastScrollTop = currentScrollValue;

    
});
//TOP
//movingDot.style.top = "-40px";
//BOTTOM
//movingDot.style.top = "220px";

// @keyframes moving {
//     0%{
//         top:260px;
//     }
//     50%{
//         top:530px;
//     }
//     100%{
//         top:260px;
//     }

// 270 is total movement
// divide totalScrollHeight by totalmovement
// }
