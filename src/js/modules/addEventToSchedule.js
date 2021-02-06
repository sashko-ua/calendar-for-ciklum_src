function addEventToSchedule() {
    const cells = document.querySelectorAll('[data-id]');

    for (let i = 7; i < cells.length; i++) {
        if (i == 12 || i == 18 || i == 24 || i == 30 || i == 36 || i == 42 || i == 48 || i == 54) {
            continue;
        } else {
            const getEvent = JSON.parse(localStorage.getItem(`${i}`));

            if (getEvent != null) {
                cells[i].innerHTML = getEvent.event;
                cells[i].classList.add('calendar__body--active');
            }
        }
    }
}

export default addEventToSchedule;