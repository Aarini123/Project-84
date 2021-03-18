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