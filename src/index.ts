import { Application } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x66666,
});

// handle resize
window.addEventListener('resize', resize);
function resize(){
    app.renderer.resize(window.innerWidth, window.innerHeight);
}
resize();
