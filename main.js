canvas=document.getElementById("Canvas_");
ctx=canvas.getContext("2d");
var car_width=120;
var car_height=70;
var background_img="racing2.jpg";
var car_img="car1.png";
var car_X=10;
var car_Y=10;

var car_2width=120;
var car_2height=70;
var car_2X=10;
var car_2Y=100;


function add_cars() {
    background_img_=new Image();
background_img_.onload=upload_background;
background_img_.src=background_img;

car_img_= new Image();
car_img_.onload=upload_car;
car_img_.src=car_img;

car_img_2=new Image();
car_img_2.onload=upload_car2;
car_img_2.src="car 2.png";
}

function upload_background() {
    ctx.drawImage(background_img_,0,0,canvas.width,canvas.height);
}

function upload_car() {
    ctx.drawImage(car_img_,car_X,car_Y,car_width,car_height);

}

function upload_car2() {
    ctx.drawImage(car_img_2,car_2X,car_2Y,car_2width,car_2height);
}


window.addEventListener("keydown",keyDown_car1);

function keyDown_car1(e) {
     key_pressed=e.keyCode;

     if(car_X>435){
        console.log("car 1 Won!!")
        document.getElementById("game").innerHTML="Car1 Won!!!"
    }

     if(key_pressed=="37"){
         console.log("left");
         left();
     }
     if(key_pressed=="38"){
         console.log("up");
         up();
     }
     if(key_pressed=="39"){
         console.log("right");
         right();
     }
     if(key_pressed=="40"){
         console.log("down");
         down();
     }
}
function left() {
    if(car_X>=10){
        car_X=car_X-10;
        upload_background();
upload_car();
upload_car2();
    }
}

function right(){
    if(car_X<=700){
        car_X=car_X+10;
        upload_background();
upload_car();
upload_car2();
    }
}

function up(){
    if(car_Y>=0){
        car_Y=car_Y-10;
        console.log(car_Y)
        upload_background();
        upload_car();
        upload_car2();
    }
}

function down(){
    if(car_Y<=360){
        car_Y=car_Y+10;
        upload_background();
        upload_car();
        upload_car2();
    }
}




window.addEventListener("keydown",keyDown_car2);

function keyDown_car2(e) {
     key_pressed=e.keyCode;

     if(car_2X>435){
        console.log("car 2 Won!!")
        document.getElementById("game").innerHTML="Car2 Won!!!"
    }


     if(key_pressed=="65"){
         console.log("left2");
         left2();
     }
     if(key_pressed=="66"){
         console.log("up2");
         up2();
     }
     if(key_pressed=="67"){
         console.log("right2");
         right2();
     }
     if(key_pressed=="68"){
         console.log("down2");
         down2();
     }
}
function left2() {
    if(car_2X>=10){
        car_2X=car_2X-10;
        upload_background();
upload_car();
upload_car2();
    }
}

function right2(){
    if(car_2X<=700){
        car_2X=car_2X+10;
        upload_background();
upload_car();
upload_car2();
    }
}

function up2(){
    if(car_2Y>=0){
        car_2Y=car_2Y-10;
        console.log(car_2Y)
        upload_background();
        upload_car();
        upload_car2();
    }
}

function down2(){
    if(car_2Y<=360){
        car_2Y=car_2Y+10;
        upload_background();
        upload_car();
        upload_car2();
    }
}
