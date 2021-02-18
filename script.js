const canvas = document.getElementById('canvas');
const increasebtn = document.getElementById('increase');
const decreasebtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let ispressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e)=>{
    ispressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e)=>{
    ispressed = true;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e)=>{
    if(ispressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawcircle(x2, y2)
        drawline(x, y, x2, y2);

        x= x2
        y= y2
    }
})

canvas.addEventListener('mousedown', (e) =>{
    ispressed = true;
    x= e.offsetX;
    y= e.offsetY;
})

canvas.addEventListener('mouseup', (e) =>{
    ispressed = false;
    x= undefined;
    y= undefined;
})

canvas.addEventListener('mousemove', (e) =>{
    if(ispressed){
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawcircle(x2, y2)
    }
})

function drawcircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawline(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increasebtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreasebtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})


colorEl.addEventListener('change', (e) => color = e.target.value)

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

// drawcircle(100, 200);
// drawline(300, 300, 300, 500);