function renderGrids(parentSelector) {
    const selector = document.querySelector(parentSelector),
        innerHeader = ['Time/Day', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    for (let i = 0, time = 0; i < 60; i++) {
        const cell = document.createElement('div');

        cell.classList.add('calendar__body');
        cell.setAttribute('data-id', i);

        if (i < 6) {
            switchClass(cell);
            cell.innerHTML = `${innerHeader[i]}`;
        }

        if (i == 6 || i == 12 || i == 18 || i == 24 || i == 30 || i == 36 || i == 42 || i == 48 || i == 54) {
            switchClass(cell);
            cell.innerHTML = `1${time++}.00`;
        }
        selector.append(cell);
    }
}

function switchClass(cell) {
    cell.classList.remove('calendar__body');
    cell.classList.add('calendar__header');
}

export default renderGrids;