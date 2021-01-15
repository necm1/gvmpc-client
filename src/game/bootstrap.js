import EventManager from './event-manager';
import GuiReadyEvent from './event/gui/ready';
import Storage from './storage';

// Assign events
EventManager.add('guiReady', GuiReadyEvent.execute);
EventManager.add('addStorage', Storage.add);

/*mp.events.add('writeChat', (msg) => {
  player.call('playerChat', msg);
});

mp.keys.bind(0x7b, true, () => {
  let state = !mp.gui.cursor.visible;
  mp.gui.cursor.show(state, state);
});*/
