var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var color="red"
var radius=50
var lastX,lastY,currentX,currentY 
var mouseEvent=""

canvas.addEventListener("mouseup",mu)
function mu(e){
    mouseEvent="mouseup"
    console.log("mouse is up")

}

canvas.addEventListener("mouseleave",ml)
function ml(e){
    mouseEvent="mouseleave"
    console.log("mouse left the canvas")
}

canvas.addEventListener("mousedown",md)
function md(e){
    mouseEvent="mousedown"
    color=document.getElementById("colorInput").value;
    radius=document.getElementById("radiusInput").value;
    console.log("mouse is down")
}

canvas.addEventListener("mousemove", mm)
function mm(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= 3;
        ctx.arc(currentX,currentY,radius,0,2*Math.PI)
        ctx.stroke();
    }
    lastX=currentX
    lastY=currentY
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}