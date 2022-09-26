import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x66666,
});

const background = Sprite.from("Court.jpg");
background.anchor.set(.5,.5);
background.x = window.innerWidth/ 2;
background.y = window.innerHeight / 2;
background.width = window.innerWidth / 2;
background.height= window.innerHeight;

app.stage.addChild(background);

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
