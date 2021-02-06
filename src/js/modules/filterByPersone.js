import addEventToSchedule from "./addEventToSchedule";

function filterByPersone() {
    const filterBtn = document.querySelector('.filter');

    filterBtn.addEventListener('change', () => {
        addEventToSchedule();

        const filterValue = filterBtn.value;
        const eventsArr = [];

        for (let i = 0; i < 60; i++) {
            const event = JSON.parse(localStorage.getItem(i));

            if(event != null) {
                eventsArr.push(event);
            }
        }

        const filteredArr = eventsArr.filter(event => {
            if (event.participants.indexOf(filterValue) != -1) {
                    return event;
                }
        });
        
        const cells = document.querySelectorAll('[data-id]');

        for (let i = 0; i < filteredArr.length; i++) {
            const id = filteredArr[i].id;

            cells[id].innerHTML = filteredArr[i].participants;
            cells[id].classList.add('calendar__body--filtered');
        }
    });
}

export default filterByPersone;