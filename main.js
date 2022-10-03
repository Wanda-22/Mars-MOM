canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

M=["M1.jpg","M2.jpg","M3.jpg","M4.jpg"];
r=Math.floor(Math.random()*4);

bg=M[r];
rover="rover.png";
wr=100;
hr=90;

x=10;
y=10;

function bi(){
    v=new Image();
    v.onload=ubg;
    v.src=bg;

    r=new Image();
    r.onload=rbg;
    r.src=rover;
 
}
function ubg(){
    ctx.drawImage(v,0,0,canvas.width,canvas.height);
}
function rbg(){
    ctx.drawImage(r,x,y,wr,hr);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    z=e.keyCode;
    console.log(z);
    if(z=='37'){
        console.log("left arrow is pressed");
        Left();
    }

    if(z=='38'){
        console.log("up arrow is pressed");
        Up();
    } 

    if(z=='39'){
        console.log("right arrow is pressed");
        Right();
    }

    if(z=='40'){
        console.log("down arrow is pressed");
        Down();
    }
}

function Left() {
    if (x>=0) {
        x=x-10;
        ubg();
        rbg();
    }
}

function Right() {
    if (x<=700) {
        x=x+10;
        ubg();
        rbg();
    }
}

function Up() {
    if (y>=0) {
        y=y-10;
        ubg();
        rbg();
    }
}

function Down() {
    if (y<=500) {
        y=y+10;
        ubg();
        rbg();
    }
}