import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x66666,
});

const background:Sprite = Sprite.from("Court.jpg");
background.anchor.set(.5,.5);
const player:Sprite = Sprite.from("Player.png");
player.anchor.set(.5,.5);
const racket:Sprite = Sprite.from("Racket.png");


app.stage.addChild(background);
app.stage.addChild(player);
app.stage.addChild(racket);

// handle resize
window.addEventListener('resize', resize);
function resize(){
    app.renderer.resize(window.innerWidth, window.innerHeight);
    background.x = window.innerWidth / 2;
    background.y = window.innerHeight / 2;
    player.x = window.innerWidth / 2;
    player.y = window.innerHeight / 2;
    if(window.innerWidth < window.innerHeight){
	background.width = window.innerWidth * .9;
	background.height= background.width;
    }
    if(window.innerHeight < window.innerWidth){
	background.height= window.innerHeight * 0.9;
	background.width = background.height;
    }
    player.width = background.width / 10;
    player.height = player.width + 1;

    racket.x = player.x + (player.width / 2);
    racket.y = player.y - (.6 * player.height);
    racket.width = player.width/1.5;
    racket.height = racket.width;
}
resize();
