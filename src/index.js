import { Storage } from "./game/storage";

const storage = new Storage();

let browser;

mp.events.add("guiReady", () => {
  browser = mp.browsers.new("http://localhost:4200/");

  mp.game.graphics.transitionToBlurred(250);
  mp.game.ui.displayHud(false);
  mp.game.ui.displayRadar(false);
});

mp.events.add("writeChat", (msg) => {
  player.call("playerChat", msg);
});

mp.keys.bind(0x7b, true, () => {
  let state = !mp.gui.cursor.visible;
  mp.gui.cursor.show(state, state);
});
