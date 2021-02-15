let canvas = document.getElementById('snake'); //criar elemento que irá radar o jogo
let context = canvas.getContext('2d');
let box = 32;
let snake = []; // criar cobrinha com lista, já que ele vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos

snake [0] = {
    x: 8 * box,
    y: 8 * box
}
    let direction = "right";

    let food = {
        x: Math.floor(Math.random() * 15 + 1 ) * box,
        y: Math.floor(Math.random() * 15 + 1 ) * box
    }
function criarBG(){
            context.fillStyle = "lightgreen";
            //fillrect ele vai desenha nosso retangulo onde vai acontecer o jogo
            //o fillrectio trabalhar com quatro paramentros 
            context.fillRect(0, 0, 16 * box, 16 * box);
    }

function criarcobrinha(){
   for(i = 0; i < snake.length; i++){
       context.fillStyle = "green";
       context.fillRect(snake[i].x, snake[i].y, box, box);
}
    }
 function drawfood(){
     context.fillStyle = "red";
     context.fillRect(food.x , food.y , box, box);
 }
 //quando um evento acontece, detecta e chama uma funçao 
    document.addEventListener(`keydown`, update);

    function update(event){
        if(event.keyCode == 37 && direction != "right") direction = "left";
        if(event.keyCode == 38 && direction != "down") direction = "up";
        if(event.keyCode == 39 && direction != "left") direction = "right";
        if(event.keyCode == 40 && direction != "up") direction ="down";

        
    }

function iniciarjogo(){

 

    if(snake[0].x > 15  * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left")snake[0].x = 16 * box;
    if(snake[0].y >15 * box && direction == "down")snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up")snake[0].y = 16 * box; 
  
    for(i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("GAME OVER! :(");

        }
    }

    criarBG();
    criarcobrinha();
    drawfood();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakex += box;
    if(direction == "left") snakex -=box;
    if(direction == "up") snakey -= box;
    if(direction == "down") snakey += box;

    if(snakex != food.x || snakey != food.y){
        snake.pop(); //pop tirar o ultimo elemento da lista
    }else{
        
        food.x = Math.floor(Math.random() * 15 + 1 ) * box,
        food.y = Math.floor(Math.random() * 15 + 1 ) * box

    }

    

    let newHead = {
        x: snakex,
        y: snakey
    }
    snake.unshift(newHead);//metodo unshitft adiciona como primeiro quadradinho da cobra
}

let jogo = setInterval(iniciarjogo,100);