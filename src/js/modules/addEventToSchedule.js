function addEventToSchedule() {
    const cells = document.querySelectorAll('[data-id]');

    for (let i = 7; i < cells.length; i++) {
        if (i == 12 || i == 18 || i == 24 || i == 30 || i == 36 || i == 42 || i == 48 || i == 54) {
            continue;
        } else {
            cells[i].innerHTML = localStorage.getItem(`${i}`);
        }
    }
}

export default addEventToSchedule;