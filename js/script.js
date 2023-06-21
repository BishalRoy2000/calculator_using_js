let sound = new Audio("music/move.mp3");
let input = document.forms["myform"]["display"];

document.getElementsByClassName("equal")[0].addEventListener("click", () => {
    sound.play();
    if (eval(input.value) == undefined) {
        input.value = "0";
    }
    else {
        input.value = eval(input.value);
    }
})