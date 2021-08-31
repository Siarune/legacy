//Declaring important Variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const particlesArray = [];
const obstaclesArray = [];
const button = document.getElementById('play');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;
var gameover = false;

var highscore = localStorage.getItem("flappy_highscore");

//Score number gradient
const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop("0.4", "#fff");
gradient.addColorStop("0.5", "#000000");
gradient.addColorStop("0.55", "#4040ff");
gradient.addColorStop("0.6", "#fff");
gradient.addColorStop("0.9", "#fff");

//Gameloop animator
function animate() {
    var highscore = localStorage.getItem("flappy_highscore");
    gameover = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleObstacles();
    bird.update();
    bird.draw();
    ctx.fillStyle = "white";
    ctx.font = "30px sans-serif";
    ctx.strokeText(score, 565, 80);
    ctx.strokeText("HI: " + highscore, 515, 35);
    ctx.fillText(score, 565, 80);
    ctx.fillText("HI: " + highscore, 515, 35);
    handleCollisions();
    if (handleCollisions()) return;
    handleParticles();
    requestAnimationFrame(animate);
    angle += 0.12;
    hue++;
    frame++;

    if (highscore !== null) {
        if (score > highscore) {
            localStorage.setItem("flappy_highscore", score);
    }} else {
    localStorage.setItem("flappy_highscore", score);
    }
}

//Detects User input and exports it to a bool
window.addEventListener('keydown', function (e) {
    if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") spacePressed = true;
    console.log(spacePressed);
});

window.addEventListener('keyup', function (e) {
    if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") spacePressed = false;
});

//Bird Stuff
class Bird {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = 20;
        this.height = 20;
        this.weight = 0.25;
    }
    update() {
        let curve = Math.sin(angle);
        if (this.y > canvas.height - this.height + curve) {
            this.y = canvas.height - this.height + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy * 0.25;
            this.y += this.vy;
        }
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if (spacePressed && this.y > this.height) this.flap();
    }
    draw() {
        ctx.fillStyle = '#111';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    flap() {
        this.vy -= 0.5;
    }
}

//Particle System
class Particle {
    constructor() {
        this.x = bird.x;
        this.y = bird.y + 10;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = 'hsla(' + hue + ', 100%, 10%, 0.2';
    }
    update() {
        this.x -= gamespeed;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

//Makes/destroys particles
function handleParticles() {
    particlesArray.unshift(new Particle);
    for (i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    if (particlesArray.length > 200) {
        for (let i = 0; i < 20; i++) {
            particlesArray.pop(particlesArray[i]);
        }
    }
}

//Pipe (obstacle) stuff
class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height / 3 + 20);
        this.bottom = (Math.random() * canvas.height / 3 + 20);
        this.x = canvas.width;
        this.width = 75;
        this.color = '#252525';
        this.counted = false
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    update() {
        this.x -= gamespeed;
        if (!this.counted && this.x < bird.x) {
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

//Makes/destroys obstacles
function handleObstacles() {
    if (frame % 80 === 0) {
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
}

//Collision detection and gameover event
function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) {
            ctx.font = "25px sans-serif";
            ctx.fillStyle = "black";
            ctx.fillText("Game Over, your score is: " + score, 160, canvas.height / 2 - 10);
            button.style.display = "block";
            button.style.pointerEvents = "all";
            gameover = true;
            return true;
        }
    }
}

//reloads the page because I'm too lazy to do it properly
window.addEventListener('keyup', function (e) {
    if (e.code === "KeyR" && gameover == true) {
        location.reload();
        document.getElementById('canvas').focus();
    }
});

const bird = new Bird();
animate();