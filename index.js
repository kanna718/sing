var noOfButtons=document.querySelectorAll(".drum").length; 
for (var i=0;i<noOfButtons;i++){

document.querySelectorAll("button")[i].addEventListener("click",function (){

    var sound=this.innerHTML;
    makeSound(sound);
    animation(sound);
    
  
   
});

}

document.addEventListener("keypress", function(event){
      makeSound(event.key);
      animation(event.key);
})

function makeSound(enjoy){


    switch (enjoy) {
        case "k":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;    
        

        case "d":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;


        case "o":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case "n":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "m":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;  


        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;        

        default:
            break;
    }

}


function animation(ani){

    document.querySelector("."+ani).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+ani).classList.remove("pressed");
    },100);
}