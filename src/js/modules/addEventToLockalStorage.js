function addEventToLockaStorage() {
    const createBtn = document.querySelector('.btn__create'),
        eventName = document.querySelector('.create__input'),
        participants = document.querySelector('.participants'),
        day = document.querySelector('.day'),
        time = document.querySelector('.time');

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

    createBtn.addEventListener('click', () => {
        const eventData = {
            event: eventName.value,
            participants: participants.value
        };


        if (localStorage.getItem(`${dayToNum[day.value] + timeToNum[time.value]}`)) {
            showErrorRow(errorRow);
        } else {
            localStorage.setItem(`${dayToNum[day.value] + timeToNum[time.value]}`,
                `${eventData.event}, ${eventData.participants}`);
        }

    });

    day.addEventListener('change', () => {
        hideErrorRow(errorRow);
    });

    time.addEventListener('change', () => {
        hideErrorRow(errorRow);
    });
}

function showErrorRow(errorRow) {
    errorRow.classList.add('create__error--active');
}

function hideErrorRow(errorRow) {
    errorRow.classList.remove('create__error--active');
}

export default addEventToLockaStorage;