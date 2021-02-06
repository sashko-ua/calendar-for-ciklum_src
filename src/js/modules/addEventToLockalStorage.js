import selectParticipants from "./selectParticipants";

function addEventToLockaStorage() {
    const createBtn = document.querySelector('.btn__create'),
        eventName = document.querySelector('.create__input'),
        participants = document.querySelector('.participants'),
        day = document.querySelector('.day'),
        time = document.querySelector('.time'),
        overSelect = document.querySelector('.overSelect');

    const errorRow = document.querySelector('.create__error');

    const dayToNum = {
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
        },
        timeToNum = {
            '10.00': 6,
            '11.00': 12,
            '12.00': 18,
            '13.00': 24,
            '14.00': 30,
            '15.00': 36,
            '16.00': 42,
            '17.00': 48,
            '18.00': 54,
        };

    selectParticipants(participants);

    createBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const eventData = {
            id: dayToNum[day.value] + timeToNum[time.value],
            event: eventName.value,
            participants: participants.value
        };

        if (eventData.event === '') {
            eventData.event = 'Meestup';
        }

        if (localStorage.getItem(`${dayToNum[day.value] + timeToNum[time.value]}`)) {
            showErrorRow(errorRow, 'Error! The room is occupied at the selected time');
        } else if (eventData.participants == 'Select participants') {
            showErrorRow(errorRow, 'Error! Select participants');
        } else {
            localStorage.setItem(`${dayToNum[day.value] + timeToNum[time.value]}`, JSON.stringify(eventData));
            window.history.back();
        }
    });

    day.addEventListener('change', () => {
        hideErrorRow(errorRow);
    });

    time.addEventListener('change', () => {
        hideErrorRow(errorRow);
    });

    overSelect.addEventListener('change', () => {
        hideErrorRow(errorRow);
    });
}

function showErrorRow(errorRow, errorText) {
    errorRow.innerHTML = errorText;
    errorRow.classList.add('create__error--active');

}

function hideErrorRow(errorRow) {
    errorRow.classList.remove('create__error--active');
}

export default addEventToLockaStorage;