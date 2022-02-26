// loading page 
var loadinPage = document.querySelector(".loading-page");
window.onload = function () {
    loadinPage.style.display = "none" ;
}
//header nav
var navBar = document.querySelector('.nav-bar');
var closeBack = document.querySelector('.close-back')
var navigation = document.querySelector('header nav');
var ownBody = document.querySelector('.own-body');
 

navBar.onclick = function () {
    navigation.style.transform = "translate(-100%)"
    navigation.style.opacity = "1"
}
closeBack.onclick = function () {
    navigation.style.transform = "translate(0%)"
    navigation.style.opacity = "0"
}


//language select
var selectbox = document.querySelector('header nav .languages .current');
var languagesContainer = document.querySelector('header nav .languages .container');
selectbox.onclick = function () {
    languagesContainer.classList.toggle("display");
}

// fast access staarts
const fastAccessButton = document.querySelector(".fast-access .main-icon");
const fastAccessIcons = document.querySelector(".fast-access .other-icons");
fastAccessButton.onclick = function () {
    fastAccessIcons.classList.toggle("openAccess");
    fastAccessButton.classList.toggle("opened")
}
//share script starts 
var shareButton = document.querySelector(".share-button");
const title = window.document.title;
const url = window.document.location.href;
shareButton.onclick = function () {
    if (navigator.share) {
        navigator.share({
            title: `${title}` ,
            url: `${url}`
        })
        .catch(console.error)
    }
}

//back to top
var backTop = document.querySelector(".back-top");
backTop.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// cancel reserve section
var cancelReserve = document.querySelector('.reserve-section .overlay form .buttons .cancel') ;
var ReserveSection = document.querySelector('.reserve-section') ;
var serviceExactName = document.querySelector('.reserve-section .overlay form input.exact-service ');
cancelReserve.onclick = function () {
    ReserveSection.classList.add("undisplay") ;
    serviceExactName.value = "" ;
}
// services get service exact name in input
var serviceCard = document.querySelectorAll('.services .services-titles .card');
serviceCard.forEach( e => {
    e.onclick = function () {
        ReserveSection.classList.remove("undisplay") ;
        serviceExactName.value = e.getAttribute('data-service-name') ;
    }
});



///////////////// testimonials goes here /////////////

//why french slider goes here 
const WhyFrenchArrowLeft = document.querySelector('.why-french .arrow-left'); 
const WhyFrenchArrowRight = document.querySelector('.why-french .arrow-right'); 
const whyFrenchReasons = document.querySelector('.why-french .reason-container .reasons');
var sizeWidth = document.querySelector('.why-french .reason-container .reasons .reason').clientWidth;


window.onresize = function () {
    sizeWidth = document.querySelector('.why-french .reason-container .reasons .reason').clientWidth;
}
 

let counter = 0 ;

WhyFrenchArrowRight.addEventListener('click' , ()=>{  
    WhyFrenchArrowLeft.style.display = "block";
    counter-- ;  
    clickCounter++
    whyFrenchReasons.style.transform = 'translateX('+(sizeWidth * counter ) +'px)'; 
    if (counter <= -4) {
        WhyFrenchArrowRight.style.display = 'none'; 
        counter = -4;
    } 
});     

WhyFrenchArrowLeft.addEventListener('click' , ()=>{  
    WhyFrenchArrowRight.style.display = "block";
    if (counter >= -1) {  
        counter = -1 ;
        WhyFrenchArrowLeft.style.display = "none";
    }
    whyFrenchReasons.style.transform = 'translateX(' +(sizeWidth * counter + sizeWidth) +'px)'  ; 
    counter++ 
    clickCounter--
});     


let clickCounter = 1;
setInterval(() => {
    if (clickCounter < 5) {
        WhyFrenchArrowRight.click();
    }else {
        counter = 1 ;
        clickCounter = 0 ;
        WhyFrenchArrowRight.style.display = "block";
        WhyFrenchArrowRight.click();
        WhyFrenchArrowLeft.style.display = "none";
    }
},7000); 




// reserve place displayer
var reserveButton = document.querySelector(".reserve .text .button");
var reserveForm = document.querySelector(".reserve .text form");
reserveButton.onclick = function () {
    reserveForm.classList.toggle('undisplay');
}

