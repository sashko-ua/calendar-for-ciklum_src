function selectParticipants(participantsSelector) {
    const selectBox = document.querySelector('.selectBox'),
        checkboxes = document.querySelector('.checkboxes'),
        inputs = document.querySelectorAll('.checkboxes input');

    window.addEventListener('click', (e) => {
        if (e.target.classList == 'overSelect') {
            checkboxes.classList.add('checkboxes--active');
        }
    });

    const participantsList = [];

    inputs.forEach(input => {
        input.addEventListener('change', () => {
            checkboxes.classList.remove('checkboxes--active');

            if (input.getAttribute('type') === 'checkbox' && input.checked === true) {
                participantsList.push(input.nextSibling.textContent);
            } else {
                const index = participantsList.indexOf(input.nextSibling.textContent);

                participantsList.splice(index, 1);
            }

            for (let i = 0; i < participantsList.length; i++) {
                participantsSelector.innerHTML = participantsList.join(', ');
            }

        });
    });
}

export default selectParticipants;