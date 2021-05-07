for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key){
    var drum;
    switch(key){
        case 'w':
            drum = "sounds/tom-1.mp3";
            break;
        case 'a':
            drum = "sounds/tom-3.mp3";
            break;
        case 's':
            drum = "sounds/snare.mp3";
            break;
        case 'd':
            drum = "sounds/kick-bass.mp3";
            break;
        case 'j':
            drum = "sounds/crash.mp3";
            break;
        case 'k':
            drum = "sounds/tom-4.mp3";
            break;
        case 'l':
            drum = "sounds/tom-2.mp3";
            break;
        default:
            drum = "sounds/tom-1.mp3";
    }
    var audio = new Audio(drum);
    audio.play();
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);        
}