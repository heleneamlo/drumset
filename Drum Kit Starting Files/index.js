let numberOfDrumButtons = document.querySelectorAll(".drum").length;
function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
    
}
function switchInput(input){
    switch(input){
        case"w":
            var audio = new Audio("./sounds/crash.mp3")
            audio.play();
        break;
        case"a":
            var audio = new Audio("./sounds/kick-bass.mp3")
            audio.play();
        break;
        case"s":
            var audio = new Audio("./sounds/snare.mp3")
            audio.play();
        break;
        case"d":
            var audio = new Audio("./sounds/tom-1.mp3")
            audio.play();
        break;
        case"j":
            var audio = new Audio("./sounds/tom-2.mp3")
            audio.play();
        break;
        case"k":
            var audio = new Audio("./sounds/tom-3.mp3")
            audio.play();
        break;
        case"l":
            var audio = new Audio("./sounds/tom-4.mp3")
            audio.play();
        break;
        default:
            console.log(buttonInnerHtml + "something went wrong");
        break;
    }
}
for(i=0;i<numberOfDrumButtons;++i){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHtml = this.innerHTML;
        switchInput(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    })
}
document.addEventListener("keydown", function(){
    switchInput(event.key);
    buttonAnimation(event.key);
})

