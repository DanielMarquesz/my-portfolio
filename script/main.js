
window.onload = () => {

// alert('Página em Desenvolvimento!')

function toggleClass(){     // Change the class of the navigation bar 
    
    if(window.scrollY > 200){
        document.getElementById('nav').className='nav-tera';

    }if(window.scrollY <= 600){
        document.getElementById('nav').className='hide';
    }
}

window.addEventListener("scroll", function(){
    toggleClass();
})


const msgs = ["Olá! Bem vindo ao meu Portfólio!            ", "Aqui você pode me conhecer melhor!"]
var count = 0;
var index = 0;
var currentText = "";
var letter = "";

function type() {

    if (count === msgs.length) {
        count = 1;
        document.querySelector(".typing").className = 'typing-stop'
    }

    currentText = msgs[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 70)
}

type()

// Carousel Slides

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';


// Button Listeners

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1)  return;
    carouselSlide.style.transition = "transform 0.7s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

});


prevBtn.addEventListener('click', () => {

    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.7s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

}); 


carouselSlide.addEventListener('transitionend', () => {

    if (carouselImages[counter].id === 'lastClone'){

        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone'){
        
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    }
}); 

// Hidden Menu After Click

function hideMenu(){
    let menuOpen = document.querySelector('.toggler').checked;
  
        if(menuOpen = true){
            document.querySelector('.toggler').checked = false;
        }
    }
    window.addEventListener("scroll", hideMenu);
}