import { GAME_CONFIG } from "./config.js";
import { STATUSES, COMPLETED_STATUSES } from "./statuses.js";
import { CATEGORIES } from "./categories.js";

import { bosses } from "./data/bosses.js";
import { miniBosses } from "./data/miniBosses.js";
import { normalWeapons } from "./data/normalWeapons.js";
import { specialWeapons } from "./data/specialWeapons.js";
import { legionArms } from "./data/legionArms.js";
import { emotes } from "./data/emotes.js";
import { vessels } from "./data/vessels.js";;
import { records } from "./data/records.js";

import { dlcBosses } from "./data/dlcBosses.js";
import { dlcGear } from "./data/dlcGears.js";
import { dlcEmotes } from "./data/dlcEmotes.js";
import { dlcCiphers } from "./data/dlcCiphers.js";
import { dlcRecords } from "./data/dlcRecords.js";

console.log("GAME index loaded");

export const GAME = {
  ...GAME_CONFIG,
  statuses: STATUSES,
  completedStatuses: COMPLETED_STATUSES,
  categories: CATEGORIES,
  data: {
    bosses,
    miniBosses,
    normalWeapons,
    specialWeapons,
    legionArms,
    emotes,
    vessels,
    records,
    dlcBosses,
    dlcGear,
    dlcEmotes,
    dlcCiphers,
    dlcRecords
  }
};