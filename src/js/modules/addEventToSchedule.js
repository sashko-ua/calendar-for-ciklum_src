function addEventToSchedule() {

    let event = localStorage.getItem();

    document.querySelector('.title').addEventListener('click', () => {

        console.log(event);
    });
}

export default addEventToSchedule;