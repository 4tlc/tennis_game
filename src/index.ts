import { Application, Container, Sprite } from 'pixi.js'

let speed: number;
type map = {
    [key: string]: boolean;
}
let pressed: map = {};
let oldBGWidth: number;
let oldBGHeight: number;

const app = new Application({
	view: document.getElementById("pixi-canvas")as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x66666,
});

app.ticker.add(update);

function update(delta: number){
    let x: number = 0;
    let y: number = 0;
    if(pressed["w"])
	y--;
    if(pressed["s"])
	y++;
    if(pressed["a"])
	x--;
    if(pressed["d"])
	x++;
    player.x += x * speed * delta;
    player.y += y * speed * delta;
    racket.x += x * speed * delta;
    racket.y += y * speed * delta;
}

const gameContainer:Container = new Container();
app.stage.addChild(gameContainer);

const background:Sprite = Sprite.from("Court.jpg");
background.anchor.set(.5,.5);
const player:Sprite = Sprite.from("Player.png");
player.anchor.set(.5,.5);
const racket:Sprite = Sprite.from("Racket.png");

gameContainer.addChild(background);
gameContainer.addChild(player);

//movement
document.onkeydown = document.onkeyup = (e) =>{
    let input = e.key.toLowerCase();
    pressed[input] = e.type === 'keydown';
}

// handle resize
window.addEventListener('resize', resize);
function resize(){
    placeElements(false);
}

function startGame(){
    placeElements(true);
}

function placeElements(isStart: boolean){
    let newWidth: number = window.innerWidth;
    let newHeight: number = window.innerHeight;
    if(newWidth < newHeight){
	gameContainer.width = newWidth * .9;
	gameContainer.height= gameContainer.width;
    }else{
	gameContainer.height= newHeight * 0.9
	gameContainer.width = gameContainer.height;
    }

    gameContainer.x = newWidth / 2;
    gameContainer.y = newHeight / 2;
    if(isStart){
	console.log("start");
    }
}
function fakeplaceElements(isStart: boolean){
    let newWidth: number = window.innerWidth;
    let newHeight: number = window.innerHeight;
    speed = newWidth / 100;
    app.renderer.resize(newWidth,newHeight);
    background.x = newWidth / 2;
    background.y = newHeight / 2;
    if(newWidth < newHeight){
	background.width = window.innerWidth * .9;
	background.height= background.width;
    }else{
	background.height= newHeight * 0.9
	background.width = background.height;
    }
    player.width = background.width / 10;
    player.height = background.height /10;
    racket.width = player.width/1.5;
    racket.height = racket.width;
    if(isStart){
	player.x = newWidth / 2;
	player.y = newHeight - (newHeight / 4);
    }else{
    }
    racket.x = player.x + (player.width / 2);
    racket.y = player.y - (.6 * player.height);

    oldBGWidth = background.width;
    oldBGHeight = background.height
}
startGame();
