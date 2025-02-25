
const partTriggers = document.querySelectorAll('.part .trigger')

partTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => { 
        const part = trigger.parentElement
        const isOpen = part.classList.contains('open')

        if (isOpen) {
            part.classList.remove('open')
        } else {
            part.classList.add('open')
        }
    })
})