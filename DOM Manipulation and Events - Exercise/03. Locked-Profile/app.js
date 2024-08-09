function lockedProfile() {
    let profilesEl = document.querySelectorAll('.profile')
    for (const profile of profilesEl) {
        const buttonEl = profile.querySelector('button')
        const radioLockEl = profile.querySelector('input[type=radio][value=lock]')
        buttonEl.addEventListener('click', () => {
            if (radioLockEl.checked) {
                return
            }
            const additionalInfo = buttonEl.previousElementSibling;
            if (buttonEl.textContent === 'Show more') {
                additionalInfo.style.display = 'block'
                buttonEl.textContent = 'Hide it'
            } else {
                additionalInfo.style.display = 'none'
                buttonEl.textContent = 'Show more'
            }
        })
    }
}