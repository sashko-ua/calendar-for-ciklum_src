'use strict';
import renderGrids from './modules/renderTable';
import addEventToLockaStorage from './modules/addEventToLockalStorage';
import addEventToSchedule from "./modules/addEventToSchedule";


try {
    renderGrids('.calendar__inner');
    addEventToSchedule();
} catch (error) {}

try {
    addEventToLockaStorage();
} catch (error) {}