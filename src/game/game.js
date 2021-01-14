import { EventManager } from "./event-manager";
import { Storage } from "./storage";

export const eventManager = new EventManager();
export const storage = new Storage();

// Assign events
eventManager.add("addStorage", storage.add);
