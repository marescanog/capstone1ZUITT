var navStartTopVal = document.getElementById("nav-start").getBoundingClientRect().top;
var navProjectTopVal = document.getElementById("nav-projects").getBoundingClientRect().top;
var navToolsTopVal = document.getElementById("nav-tools").getBoundingClientRect().top;
var navContactTopVal = document.getElementById("nav-contact").getBoundingClientRect().top;


var navs = document.getElementsByClassName("c-svg-container-overlay");
var majorDots = document.getElementsByClassName("c-major-dot");
var movingDot = document.getElementById("moving-dot");
var scrollContainer = document.getElementById("scroll-container");

var scrollElements = document.getElementsByClassName("c-scroll-snap-child");


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

// For detecting if scroll Up or down
var lastScrollTop = 0;

// For Detecting Dot change
var currentDotNo = 0;

/* Dot moves as ScrollBar moves */
scrollContainer.addEventListener('scroll', () =>{
    const currentScrollValue = scrollContainer.scrollTop;

    // These only need to be computed once, move variables out (Only Chnage when window Resize is detected);
    const totalScrollHeight= scrollContainer.scrollHeight - window.innerHeight;

    // Get Current Scroll Percentage (The range result is 0 - 1)
    const currentScrollPercentage = Math.round(((currentScrollValue/totalScrollHeight) + Number.EPSILON) * 100)/100;

    // Get Range Conversion of the Nav Distance (Distance is 260)
    const navBarAdd = currentScrollPercentage*260;


    // find out if scrolling up or down
    if (currentScrollValue > lastScrollTop){
        // Scrolling Down
        movingDot.style.top =  (0 + navBarAdd) + "px" ;
    } else {
        // Scrolling Up
        movingDot.style.top =  (0 + navBarAdd) + "px" ;
    }
    lastScrollTop = currentScrollValue;

    //console.log(movingDot.getBoundingClientRect().top);

   
    // Execute CSS Script when the moving dot touches a major dot
    const currentDotPostion = movingDot.getBoundingClientRect().top;
    if(currentDotPostion < navStartTopVal+35){
        if(currentDotNo != 0){
            //console.log("First Dot!");
            currentDotNo=0;
            setSelected(currentDotNo);
        }
    }

    if(currentDotPostion > navProjectTopVal-10 && currentDotPostion < (navProjectTopVal+30)){
        if(currentDotNo != 1){
            //console.log("Second Dot!");
            currentDotNo=1;
            setSelected(currentDotNo);
        }
    }

    if(currentDotPostion > navToolsTopVal-10 && currentDotPostion < (navToolsTopVal+30)){
        if(currentDotNo != 2){
            //console.log("Third Dot!");
            currentDotNo=2;
            setSelected(currentDotNo);
        }
    }

    if(currentDotPostion > navContactTopVal-10){
        if(currentDotNo != 3){
            //console.log("Fourth Dot!");
            currentDotNo=3;
            setSelected(currentDotNo);
        }
    }

});

// NOTES FOR REFERENCE

// var navStartTopVal = document.getElementById("nav-start").getBoundingClientRect().top;
// var navProjectTopVal = document.getElementById("nav-projects").getBoundingClientRect().top;
// var navToolsTopVal = document.getElementById("nav-tools").getBoundingClientRect().top;
// var navContactTopVal = document.getElementById("nav-contact").getBoundingClientRect().top;


// var oldDotPosition = movingDot.getBoundingClientRect().top;
// console.log(oldDotPosition);
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
