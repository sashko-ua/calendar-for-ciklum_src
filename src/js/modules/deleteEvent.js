import addEventToSchedule from "./addEventToSchedule";

function deleteEvent() {
    const deleteBtn = document.querySelectorAll('.delete'),
        modal = document.querySelector('.modal'),
        no = document.querySelector('.no'),
        yes = document.querySelector('.yes');

    let id;

    deleteBtn.forEach(element => {
        element.addEventListener('click', (e) => {
            id = e.target.parentElement.attributes[1].value;
            modal.classList.add('modal--active');
        });
    });

    no.addEventListener('click', () => {
        modal.classList.remove('modal--active');
    });

    yes.addEventListener('click', () => {
        modal.classList.remove('modal--active');

        localStorage.removeItem(id);

        window.history.go(0);
    });
}

export default deleteEvent;