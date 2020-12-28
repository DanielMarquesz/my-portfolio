
onload=function(){
    document.body.style.visibility="visible"
    }

function toggleClass(){     // Change the class of the navigation bar 
    
    if(window.scrollY > 200){
        document.getElementById('nav').className='nav';

    }if(window.scrollY <= 600){
        document.getElementById('nav').className='hide';
    }

}

window.addEventListener("scroll", function(){

    toggleClass();
})


const msgs = ["Olá! Bem vindo ao meu Portfólio!            ", "Aqui você pode me conhecer melhor!"]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

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
    setTimeout(type, 200)
}

type()