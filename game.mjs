import Labyrinth from "./labyrint.mjs"
import ANSI from "./utils/ANSI.mjs";
import SplashScreen from "./splashScreen.mjs";

const REFRESH_RATE = 250;

console.log(ANSI.RESET, ANSI.CLEAR_SCREEN, ANSI.HIDE_CURSOR);

let intervalID = null;
let isBlocked = false;
let state = null;

function init() {
    const splashScreen = new SplashScreen();
    
    splashScreen.draw();
    setTimeout(() => {
        console.log(ANSI.CLEAR_SCREEN);
        startGame();
    }, 5000);
}

function startGame()
{
    //All levels available to the game. 
    state = new Labyrinth();
    intervalID = setInterval(update, REFRESH_RATE);
}

function update() {

    if (isBlocked) { return; }
    isBlocked = true;
    //#region core game loop
    state.update();
    state.draw();
    //#endregion
    isBlocked = false;
}

init();