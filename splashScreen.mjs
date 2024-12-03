import ANSI from "./utils/ANSI.mjs";


const outputGraphics = `
 ██▓    ▄▄▄       ▄▄▄▄ ▓██   ██▓ ██▀███   ██▓ ███▄    █ ▄▄▄█████▓ ██░ ██
▓██▒   ▒████▄    ▓█████▄▒██  ██▒▓██ ▒ ██▒▓██▒ ██ ▀█   █ ▓  ██▒ ▓▒▓██░ ██▒
▒██░   ▒██  ▀█▄  ▒██▒ ▄██▒██ ██░▓██ ░▄█ ▒▒██▒▓██  ▀█ ██▒▒ ▓██░ ▒░▒██▀▀██░
▒██░   ░██▄▄▄▄██ ▒██░█▀  ░ ▐██▓░▒██▀▀█▄  ░██░▓██▒  ▐▌██▒░ ▓██▓ ░ ░▓█ ░██
░██████▒▓█   ▓██▒░▓█  ▀█▓░ ██▒▓░░██▓ ▒██▒░██░▒██░   ▓██░  ▒██▒ ░ ░▓█▒░██▓
░ ▒░▓  ░▒▒   ▓▒█░░▒▓███▀▒ ██▒▒▒ ░ ▒▓ ░▒▓░░▓  ░ ▒░   ▒ ▒   ▒ ░░    ▒ ░░▒░▒
░ ░ ▒  ░ ▒   ▒▒ ░▒░▒   ░▓██ ░▒░   ░▒ ░ ▒░ ▒ ░░ ░░   ░ ▒░    ░     ▒ ░▒░ ░
  ░ ░    ░   ▒    ░    ░▒ ▒ ░░    ░░   ░  ▒ ░   ░   ░ ░   ░       ░  ░░ ░
    ░  ░     ░  ░ ░     ░ ░        ░      ░           ░           ░  ░  ░
                       ░░ ░
`;
const BLOCK = "█";
const BOTTOM_HALF_BLOCK = "▄";
const TOP_HALF_BLOCK = "▀";
const DOTS = "░";
const STRIPES = "▒";
const FILLED_STRIPES = "▓";

let pallet = {
    "█": ANSI.COLOR.GREEN,
    "▄": ANSI.COLOR.GREEN,
    "▀": ANSI.COLOR.GREEN,
    "░": ANSI.COLOR.LIGHT_GRAY,
    "▒": ANSI.COLOR.LIGHT_GRAY,
    "▓": ANSI.COLOR.LIGHT_GRAY
}

class SplashScreen {

    constructor() {
        this.dirty = true;
    }

    update() {
        if (BLOCK == ANSI.COLOR.GREEN)
        {
            pallet = {
                "█": ANSI.COLOR.LIGHT_GRAY,
                "▄": ANSI.COLOR.LIGHT_GRAY,
                "▀": ANSI.COLOR.LIGHT_GRAY,
                "░": ANSI.COLOR.GREEN,
                "▒": ANSI.COLOR.GREEN,
                "▓": ANSI.COLOR.GREEN
            }
        }
        else if (BLOCK == ANSI.COLOR.LIGHT_GRAY)
        {
            pallet = {
                "█": ANSI.COLOR.GREEN,
                "▄": ANSI.COLOR.GREEN,
                "▀": ANSI.COLOR.GREEN,
                "░": ANSI.COLOR.LIGHT_GRAY,
                "▒": ANSI.COLOR.LIGHT_GRAY,
                "▓": ANSI.COLOR.LIGHT_GRAY
            }
        }
    }

    draw() {
        if (this.dirty) {
            this.dirty = false;
            console.log(ANSI.CLEAR_SCREEN, ANSI.CURSOR_HOME);
            console.log(outputGraphics);
        }
    }


}

export default SplashScreen;