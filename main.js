canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_images_array=["racing.jpg","image.jpg"];
random_number=Math.floor(Math.random()*2);
console.log(random_number);
rover_width=150;
rover_height=90;
background_image=nasa_images_array[random_number];
console.log(background_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
car_width=150;
car_height=90;
car_image="car1.png";
car_x=10;
car_y=100;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=car_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
function uploadcar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38'){
        up();
        console.log("up");
    }
    
    if (keyPressed=='40'){
        down();
        console.log("down");
    }
    
    if (keyPressed=='37'){
        left();
        console.log("left");
    }
    
    if (keyPressed=='39'){
        right();
        console.log("right");
    }
    
}
function up(){
    if (rover_y>=0, car_y>=0){
        rover_y=rover_y-9.9;
        console.log("when up arrow is preased,x= "+rover_y+" ,y= "+rover_y);
        car_y=car_y-10;
        console.log("when up arrow is preased,x= "+car_x+" ,y= "+car_y);
        uploadBackground();
        uploadrover();
        uploadcar();
    }
    
}

function down(){
    if (rover_y<=500, car_y<=500){
        rover_y=rover_y+9.9;
        console.log("when down arrow is preased,x= "+rover_y+" ,y= "+rover_y);
        car_y=car_y+10;
        console.log("when down arrow is preased,x= "+car_x+" ,y= "+car_y);
        uploadBackground();
        uploadrover();
        uploadcar();
    }
    
}

function left(){
    if (rover_x>=0, car_x>=0){
        rover_x=rover_x-9.9;
        console.log("when left arrow is preased,x= "+rover_x+" ,y= "+rover_y);
        car_x=car_x-10;
        console.log("when left arrow is preased,x= "+car_x+" ,y= "+car_y);
        uploadBackground();
        uploadrover();
        uploadcar();
    }
    
}

function right(){
    if (rover_x<=700, car_x<=700){
        rover_x=rover_x+9.9;
        console.log("when right arrow is preased,x= "+rover_x+" ,y= "+rover_y);
        car_x=car_x+10;
        console.log("when right arrow is preased,x= "+car_x+" ,y= "+car_y);
        uploadBackground();
        uploadrover();
        uploadcar();
    }
   
}
if (car_x > 200){
    console.log("white car won")
    document.getElementById('score').innerHTML="We've got our super car!The Dragon!";
}