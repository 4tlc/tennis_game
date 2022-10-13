import {handleMovement, handleShotKeys} from './updateFunctions';
import {elements, placeRacket} from './elements';
import {Container, Sprite, Ticker} from 'pixi.js';

let speed: number = 0;
const pressed = elements.pressed;
const app = elements.app;
const gameContainer:Container = elements.gameContainer;
// const playerContainer = elements.playerContainer;
const background:Sprite = elements.background;
const player:Sprite = elements.player;
const racket:Sprite = elements.racket;
const ball:Sprite = elements.ball;
//movement
document.onkeydown = document.onkeyup = (e) =>{
    let input = e.key.toLowerCase();
    pressed[input] = e.type === 'keydown';
}

let gameTicker = new Ticker();

gameTicker.add((delta:number) => {
    handleMovement(pressed, delta, speed);
    handleShotKeys(pressed);
});
gameTicker.start();

// handle resize
window.addEventListener('resize', placeElements);

window.onload = () => {
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
    speed = background.width / 100;
    // recenter everything
    player.position.x = 0;
    player.position.y = background.height / 4;
    player.position.y = background.height / 4;
    player.scale.x = 1;
    player.scale.y = 1;

    racket.rotation = 0;
    racket.scale.x = 0.8;
    racket.scale.y = 0.8;
    placeRacket(1);
}
