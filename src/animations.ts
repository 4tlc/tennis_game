import {Sprite,Ticker} from 'pixi.js';

let isSwinging: boolean = false;
export function doSwing(background: Sprite, racket: Sprite){
    //animation for swing

    if(isSwinging)
	return;

    isSwinging = true;

    let upSwingTicker = new Ticker();
    let downSwingTicker = new Ticker();
    downSwingTicker.add((delta: number) => {
	moveRacketDown(delta);
    });
    downSwingTicker.start();

    function moveRacketDown(delta: number){
	if(racket.transform.rotation < 1){
	    racket.transform.rotation += .1 * delta;
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

	if(racket.transform.rotation > 0){
	    racket.transform.rotation -= .1 * delta;
	    racket.position.y-=delta * (background.height / 250);
	}else{
	    upSwingTicker.destroy();
	    isSwinging = false;
	}
    }
}
