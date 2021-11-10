window.onload = () => {
    stop();
    build();
    // console.log("hi");

    speed.addEventListener('input', () => {
        root.style.setProperty("--time", speed.value + 's');
    });

    // offset.addEventListener('input', () => {
    //     root.style.setProperty("--offset", offset.value + 'ms');
    // });

}

const button = document.getElementById("button");
const speed = document.getElementById("speed");
const offset = document.getElementById("offset");
const box = document.getElementsByClassName("boxes");
const bod = document.getElementById("body");
const root = document.documentElement;

function stop() {

    for (let i = 0; i < 20; i++) {
        box[i].style.animationPlayState = 'paused';
    }

}
function start() {

    for (let i = 0; i < 20; i++) {
        box[i].style.animationPlayState = 'running';
    }

}

function toggle(button) {

    if (button.value == "Start") {
        button.value = "Stop";
        start();

    } else if (button.value == "Stop") {
        button.value = "Start";
        stop();
    } else {
        button.value = "Start";
        stop();
    }
}

function build() {
    for (let i = 0; i < 20; i++) {
        box[i].style.width = i * 25 + "px";
        box[i].style.height = i * 25 + "px";
        box[0].style.top = "250px";
        // box[0].style.left = "250px";
        box[i].style.top = (-17.6) + "px";
        box[i].style.left = (-17.6) + "px";
        box[i].style.transform = "rotate(0deg)";
    }
}