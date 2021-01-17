/**
 * @class Player
 */
class Player {
  id = undefined;
  firstName = undefined;
  lastName = undefined;
  superJump = undefined;
  academicPoints = undefined;
  business = undefined;
  money = undefined;
  black_money = undefined;
  wanteds = undefined;
  house = undefined;
  rank = undefined;
  level = undefined;
  injured = undefined;
  duty = undefined;
  cuffed = undefined;
  tied = undefined;
  // Set this mode to determinate if the user is in admin duty
  // or being in a normal mode
  mode = undefined;
  inventory = undefined;
  voiceHash = '';
  state = 0;
  weaponAmmo = [];
  currentWeapon = undefined;
  natives = {
    SWITCH_OUT_PLAYER: '0xAAB3200ED59016BC',
    SWITCH_IN_PLAYER: '0xD8295AF639FD9CB8',
    IS_PLAYER_SWITCH_IN_PROGRESS: '0xD9D2CFFF49FAB35F',
  };
  animations = [];
  marker = null;
  //lastInteractE = new Date()
  playerSync = true;
  vehicleSync = true;
  shortCutBeingUsed = false;
  isCarrying = false;
  spawnedDrugPed = null;
}

export default new Player();
