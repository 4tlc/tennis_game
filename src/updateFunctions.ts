import {Sprite} from "pixi.js";
import {map} from './elements';
import { elements } from "./elements";
import {doSwing} from './animations';

const player:Sprite = elements.player;
const racket:Sprite = elements.racket;
const background:Sprite = elements.background;
export let isSwinging = false;

export function setIsSwinging(newState: boolean){
    isSwinging = newState;
}

export function handleMovement(pressed: map, delta: number, speed: number){
    let x: number = 0;
    let y: number = 0;
    if(player.position.y <= 0){
	player.position.y += 1;
	racket.position.y += 1;
	return;
    }
    if(player.position.y >= background.height/2.3){
	player.position.y -= 1;
	racket.position.y -= 1;
	return;
    }
    if(player.position.x >= background.width / 2.3){
	player.position.x -= 1;
	racket.position.x -= 1;
	return;
    }
    if(player.position.x <= background.width / -2.3){
	player.position.x += 1;
	racket.position.x += 1;
	return;
    }
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
}

export function handleShotKeys(pressed: map){
    if(pressed["j"])
	doSwing(background, racket);
    console.log(isSwinging);
}
