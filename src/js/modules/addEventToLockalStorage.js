function addEventToLockaStorage() {
    const createBtn = document.querySelector('.btn__create'),
        eventName = document.querySelector('.create__input'),
        participants = document.querySelector('.participants'),
        day = document.querySelector('.day'),
        dayValue = day.value,
        time = document.querySelector('.time'),
        timeValue = time.value;

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
        console.log(dayToNum.dayValue);
    });
}

export default addEventToLockaStorage;