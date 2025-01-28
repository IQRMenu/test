import { fetchDishesList } from "./getDishesList.js";
import { words } from './words.js';
import { globalData } from "./globalData.js";
import { main } from "https://iqrmenu.github.io/mainScript/IQRMenuMain.js";
main(fetchDishesList, words, globalData);