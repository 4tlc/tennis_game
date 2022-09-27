import {handleMovement, handleShotKeys} from './updateFunctions';
import {elements} from './elements';
import {Ticker} from 'pixi.js';

let speed: number = 0;
const pressed = elements.pressed;
const app = elements.app;
const gameContainer = elements.gameContainer;
// const playerContainer = elements.playerContainer;
const background = elements.background;
const player = elements.player;
const racket = elements.racket;
//movement
document.onkeydown = document.onkeyup = (e) =>{
    let input = e.key.toLowerCase();
    pressed[input] = e.type === 'keydown';
}

let gameTicker = new Ticker();

gameTicker.add((delta:number) => {
    handleMovement(delta, speed, pressed, player, racket, background);
    handleShotKeys(pressed, racket, background);
});
gameTicker.start();

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
    speed = background.width / 100;
    // recenter everything
    player.position.x = 0;
    player.position.y = background.height / 4;
    player.position.y = background.height / 4;

    racket.position.x = 0.9 * player.width;
    racket.position.y =  2.20 * player.height;
    racket.scale.x = 0.8;
    racket.scale.y = 0.8;
}
