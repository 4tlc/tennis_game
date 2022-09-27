import {Application, Container, Sprite} from "pixi.js";

let speed: number = 0;
export type map = {
    [key: string]: boolean;
}
let pressed: map = {};

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

export const elements = {
    speed: speed,
    pressed: pressed,
    app:app,
    gameContainer: gameContainer,
    //playerContainer: playerContainer,
    background: background,
    player: player,
    racket: racket
}
