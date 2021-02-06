function selectParticipants(participantsSelector) {
    const checkboxes = document.querySelector('.checkboxes'),
        inputs = document.querySelectorAll('.checkboxes input');

    window.addEventListener('click', (e) => {
        if (e.target.classList == 'overSelect') {
            checkboxes.classList.add('checkboxes--active');
        }
    });

    const participantsList = [];
    const errorRow = document.querySelector('.create__error');

    inputs.forEach(input => {
        input.addEventListener('change', () => {
            checkboxes.classList.remove('checkboxes--active');
            errorRow.classList.remove('create__error--active');

            if (input.getAttribute('type') === 'checkbox' && input.checked === true) {
                participantsList.push(input.nextSibling.textContent);
            } else {
                const index = participantsList.indexOf(input.nextSibling.textContent);

                participantsList.splice(index, 1);

                if (participantsList.length == 0) {
                    participantsSelector.innerHTML = 'Select participants';
                }
            }

            for (let i = 0; i < participantsList.length; i++) {
                participantsSelector.innerHTML = participantsList.join(', ');
            }

        });
    });
}

export default selectParticipants;