canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
var color="Blue";
var width= 1 ;
var mouseevent="";
lpx = 0;
lpy = 0;
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup (e)
{
    mouseevent="my_mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;
    console.log("mouse_move_enterd")
    if (mouseevent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("Last position of x and y coordinates = ");
  
    ctx.moveTo(lpx, lpy);
    ctx.lineTo(cpx,cpy);
    // ctx.arc(cpx,cpy,40,0,2*Math.PI );
    ctx.stroke();

    }
    
    lpx=cpx;
    lpy=cpy;

}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseevent="mouseDown";
}

var screenwidth=screen.width;
var new_width=screenwidth-70;
var height=screen.height;
var new_height=height-300;

if (screenwidth<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_width;
}

canvas.addEventListener("touchstart",touch_start);

function touch_start(e)
{
    console.log(e);
    lpx=e.touches[0].clientX-canvas.offsetLeft;
    lpy=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",touch_move);

function touch_move(e)
{
    cpx = e.touches[0].clientX - canvas.offsetLeft;
    cpy = e.touches[0].clientY - canvas.offsetTop;
    console.log("mouse_move_enterd")
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("Last position of x and y coordinates = ");
  
    ctx.moveTo(lpx, lpy);
    ctx.lineTo(cpx,cpy);
    // ctx.arc(cpx,cpy,40,0,2*Math.PI );
    ctx.stroke();
    lpx=e.touches[0].clientX-canvas.offsetLeft;
    lpy=e.touches[0].clientY-canvas.offsetTop;
}