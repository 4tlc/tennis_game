import {Sprite,Ticker} from 'pixi.js';
import {setIsSwinging, isSwinging, rightHand} from "./updateFunctions";
import { placeRacket, player } from './elements'

export function doSwing(background: Sprite, racket: Sprite){
    //animation for swing

    if(isSwinging)
	return;

    setIsSwinging(true);

    let upSwingTicker = new Ticker();
    let downSwingTicker = new Ticker();

    downSwingTicker.add((delta: number) => {
	moveRacketDown(delta);
    });
    downSwingTicker.start();

    let direction = rightHand ? 1 : -1;

    function moveRacketDown(delta: number){
	if(direction * racket.transform.rotation < 1){
	    racket.transform.rotation += direction * .1 * delta;
	    racket.position.y+=delta * (background.height / 250);
	}else{
	    upSwingTicker.add((delta:number) => {
		moveRacketUp(delta);
	    });
	    upSwingTicker.start();
	    downSwingTicker.destroy();
	}
    }

    function moveRacketUp(delta:number){
	if(direction * racket.transform.rotation > 0){
	    racket.transform.rotation -= direction * .1 * delta;
	    racket.position.y-=delta * (background.height / 250);
	}else{
	    upSwingTicker.destroy();
	    placeRacket(direction);
	    setIsSwinging(false);
	}
    }

}
