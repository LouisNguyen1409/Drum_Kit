const button = document.querySelectorAll(".drum");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML;
        makeAudio(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    makeAudio(event.key);
    buttonAnimation(event.key);
});

const makeAudio = (key) => {
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    }
    audio.play();
};

const buttonAnimation = (currentKey) => {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}