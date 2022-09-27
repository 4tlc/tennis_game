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
	resizeTo: window,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x66666,
});


const gameContainer:Container = new Container();
const background:Sprite = Sprite.from("Court.jpg");
background.anchor.set(.5,.5);

const playerContainer:Container = new Container();
const player:Sprite = Sprite.from("Player.png");
player.anchor.set(.5,.5);
const racket:Sprite = Sprite.from("Racket.png");
racket.anchor.set(.5,.5);
playerContainer.addChild(player);
playerContainer.addChild(racket);

gameContainer.addChild(background);
gameContainer.addChild(playerContainer);
app.stage.addChild(gameContainer);

//movement
document.onkeydown = document.onkeyup = (e) =>{
    let input = e.key.toLowerCase();
    pressed[input] = e.type === 'keydown';
}

app.ticker.add((delta:number) => {
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
    player.position.x += x * speed * delta;
    player.position.y += y * speed * delta;
    racket.position.x += x * speed * delta;
    racket.position.y += y * speed * delta;
});
// handle resize
window.addEventListener('resize', placeElements);

window.onload = () => {
    console.log("loaded");
    placeElements();
};

function placeElements(){
    let newWidth: number = window.innerWidth;
    let newHeight: number = window.innerHeight;
    app.renderer.resize(newWidth,newHeight);
    if(newWidth < newHeight){
	gameContainer.width = newWidth * .9;
	gameContainer.height= gameContainer.width;
    }else{
	gameContainer.height= newHeight * 0.9
	gameContainer.width = gameContainer.height;
    }
    gameContainer.x = newWidth / 2;
    gameContainer.y = newHeight / 2;
    speed = background.width / 50;
    // recenter everything
    player.position.x = 0;
    player.position.y = background.height / 4;
    player.position.y = background.height / 4;

    racket.position.x = 0.9 * player.width;
    racket.position.y =  2.20 * player.height;
    racket.scale.x = 0.8;
    racket.scale.y = 0.8;
}
