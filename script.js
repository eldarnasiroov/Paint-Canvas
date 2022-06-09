const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let color = "black";
let fillColor = "white";
let brushWidth = 1;
let mouseDown = false;
var dataURL = canvas.toDataURL("image/jpeg");
ctx.fillStyle = fillColor;
ctx.fillRect(0, 0, 1000, 700);
document.getElementById("fill_color").oninput = function () {
    fillColor = this.value;
};
let filling = (document.getElementById("filling").onclick = function () {
    ctx.fillStyle = fillColor;
    ctx.fillRect(0, 0, 1000, 700);
});
document.getElementById("color").oninput = function () {
    color = this.value;
};
document.getElementById("size").oninput = function () {
    brushWidth = this.value;
};
canvas.addEventListener("mousedown", () => (mouseDown = true));
canvas.addEventListener("mouseup", () => (mouseDown = false));
canvas.addEventListener("mousemove", function (event) {
    ctx.lineWidth = brushWidth * 2;
    if (mouseDown) {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(event.offsetX, event.offsetY, brushWidth, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
    } else {
        ctx.beginPath();
    }
});

function clearAll() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 700);
}

function download() {
    let link = document.getElementById("link");
    link.setAttribute("download", "picture-on-canvas.png");
    link.setAttribute(
        "href",
        canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
    );
    link.click();
}