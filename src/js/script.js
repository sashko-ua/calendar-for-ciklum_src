'use strict';
import renderGrids from './modules/renderTable';
import addEventToLockaStorage from './modules/addEventToLockalStorage';
import addEventToSchedule from './modules/addEventToSchedule';
import filterByPersone from './modules/filterByPersone';
import deleteEvent from './modules/deleteEvent';

try {
    renderGrids('.calendar__inner');
    addEventToSchedule();
    filterByPersone();
    deleteEvent();
} catch (error) {}

try {
    addEventToLockaStorage();
} catch (error) {}