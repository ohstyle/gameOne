let img;



function load(){
img = new Sprite("images/pika.png",-480,50);
img2 = new Sprite("images/pf.png",700,-25);

}

function update(){
img.x++;
img2.y++;
}

function draw(pCtx){
    img.draw(pCtx);
    img2.draw(pCtx);
    }
