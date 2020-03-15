const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveButton = document.getElementById("jsSave");

const CANVAS_SIZE = 700;
const INITIAL_COlOR = "#2c2c2c";

// Essential
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// line color and width
ctx.strokeStyle = INITIAL_COlOR;
ctx.fillStyle = INITIAL_COlOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    if (!painting) {
        // click 직전의 좌표를 알기 위해 moveTo(x, y)를 한다.
        ctx.beginPath();
        ctx.moveTo(x, y);
        // console.log("Create path in", x, y);
    }
    else {
        ctx.lineTo(x, y);
        ctx.stroke();
        // console.log("Create line in", x, y);
    }
}

function handleColorClick(event) {
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    // console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if (filling) {
        filling = false;
        mode.innerText = "Fill";
    }
    else {
        filling = true;
        mode.innerText = "Paint";

    }
}

function handleCanvasClick() {
    if (filling)
        ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleRightClick(event) {
    // console.log(event);
    event.preventDefault();
}

function handleSaveClick() {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleRightClick);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if (range)
    range.addEventListener("input", handleRangeChange);

if (mode)
    mode.addEventListener("click", handleModeClick);

if (saveButton)
    saveButton.addEventListener("click", handleSaveClick);
  
