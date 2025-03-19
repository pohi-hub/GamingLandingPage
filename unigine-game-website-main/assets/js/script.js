// add event muteilp Elements 
const addEventOnElements = function(elements, eventType, callbak){
    for(let i = 0, len = elements.length; i<len;i++){
        elements[i].addEventListener(eventType,callbak);
    }
}

// mobile navbar 
// navbar will show after clicking menu button 
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLink = document.querySelector("[data-nav-link]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}
navToggler.addEventListener("click",toggleNav);

const navClose = () =>{
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}
addEventOnElements(navLink, "click",navClose);


// HEDER AND BACK TO TOP
// header and back to top will be active after scroll down t 100px for screen

const header = document.querySelector("[data-header]");
const bachTopBtn  = document.querySelector("[data-back-to-top-btn]")
const activEl = function(){
    if (window.scrollY > 100){
        header.classList.add("active");
        bachTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        bachTopBtn.classList.remove("active");
   } 
}
 
window.addEventListener("scroll",activEl);

// Button hover- ripple effect 

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function(event){
    this.style.setProperty("--top", `${event.offsetY}px`);
    this.style.setProperty("--left",`${event.offsetX}px`);
}

addEventOnElements(buttons , "mousemove" , buttonHoverRipple);


// SCROLL REVEAL 

const revealElements = document.querySelectorAll("[data-reveal]");


const revealElementOnScroll = function() {
    for (let i = 0, len = revealElements.length; i < len; i++){
        const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight/ 1.1;
        if(isElementInsideWindow){
            revealElements[i].classList.add("revealed");
        }
    }
}

window.addEventListener("scroll",revealElementOnScroll);

window.addEventListener("load",revealElementOnScroll);

// CUSTOM CURSOR

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [ ...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function(event) {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
}
window.addEventListener("mousemove", cursorMove);

window.addEventListener(hoverElements, "mouseover",function(){ cursor.classList.add("hovered")});

window.addEventListener(hoverElements, "mouseout",function(){ cursor.classList.remove("hovered")});