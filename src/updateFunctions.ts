import {Sprite} from "pixi.js";
import {map} from './elements';

import {doSwing} from './animations';

export function handleMovement(delta: number, speed: number, pressed: map, player: Sprite, racket: Sprite, background: Sprite){
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

export function handleShotKeys(pressed: map,racket: Sprite, background: Sprite){
    if(pressed["j"])
	doSwing(background, racket);
}
