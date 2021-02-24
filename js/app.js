const questions = document.querySelectorAll(".question h4")//collection of h4 questions

questions.forEach((question) => {
    question.addEventListener('click', (e) => {
        const panel = e.currentTarget.nextElementSibling
        if (panel.style.height) {
            panel.style.height = null
            panel.classList.toggle('active-p')
            e.currentTarget.classList.toggle('active-h4')
        }
        else {
            panel.style.height = panel.scrollHeight + "px"
            panel.classList.toggle('active-p')
            e.currentTarget.classList.toggle('active-h4')

        }
    })
})
