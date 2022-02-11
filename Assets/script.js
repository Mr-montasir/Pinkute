
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