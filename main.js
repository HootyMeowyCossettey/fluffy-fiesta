canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");  
car_width=100;
car_height=250;
background_image="parkingLot.jpg";
car_image="car2.png";
car_x=480;
car_y=200;



function add(){
    background_imgtag=new Image();
background_imgtag.onload=upload_background;
background_imgtag.src=background_image;
car_imgtag=new Image();
car_imgtag.onload=upload_car;
car_imgtag.src=car_image;
}
function upload_background(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function upload_car(){
ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height);
}

window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="38"){
        up();
        console.log("Up is Pressed!")
    }
    if(keypress=="40"){
        down()
        console.log("Down is Pressed")
    }
    if(keypress=="37"){
        left()
        console.log("Left is Pressed")
    }
    if(keypress=="39"){
        right()
        console.log("Right is Pressed")
    }
}
function up() {
    if (car_y>=0){
        car_y=car_y-5;
        console.log("When up arrow is press, x="+car_x+"and y="+car_y);
        upload_background();
        upload_rover();
    } }
    
    function down() {
        if (car_y<=500){
            car_y=car_y+5;
            console.log("When up arrow is press, x="+car_x+"and y="+car_y);
            upload_background();
            upload_car();
        } }
        function left() {
            if (rover_x>=0){
                rover_x=rover_x-5;
                console.log("When up arrow is press, x="+car_x+"and y="+car_y);
                upload_background();
                upload_rover();
            }}
            function right() {
                if (car_x<=700){
                    car_x=car_x+5;
                    console.log("When up arrow is press, x="+car_x+"and y="+car_y);
                    upload_background();
                    upload_car();
                }
            }