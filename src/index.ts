import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x66666,
});

const background:Sprite = Sprite.from("Court.jpg");
background.anchor.set(.5,.5);
background.x = window.innerWidth/ 2;
background.y = window.innerHeight / 2;
background.width = window.innerWidth / 2;
background.height= window.innerHeight;

const player:Sprite = Sprite.from("Racket.png");

app.stage.addChild(player);
player.anchor.set(.5,.5);
player.x = window.innerWidth/ 2;
player.y = window.innerHeight / 2;
player.width = window.innerWidth / 15;
player.height= window.innerHeight / 15;

app.stage.addChild(background);
app.stage.addChild(player);

// handle resize
window.addEventListener('resize', resize);
function resize(){
    app.renderer.resize(window.innerWidth, window.innerHeight);
    background.x = window.innerWidth/ 2;
    background.y = window.innerHeight / 2;
    background.width = window.innerWidth / 2;
    background.height= window.innerHeight;
}
resize();
