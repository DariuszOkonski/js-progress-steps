const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const steps = document.querySelectorAll('.steps__number')
const progressBar = document.querySelector('.progress-bar')

let current_state = 1;



function changeBorderStyle() {
    steps.forEach(step => step.classList.remove('active'))
    for(let i = 0; i < current_state; i++) {
        steps[i].classList.add('active')
    }
}

function increaseState() {
    if(current_state < steps.length) {
        current_state++;
        btnNext.disabled = false;
        btnPrev.disabled = false;
        changeBorderStyle()
    } 

    if (current_state === steps.length)
        btnNext.disabled = true

    progressBar.style.width = `${(((current_state - 1) / (steps.length - 1)) * 100)}%`;
}

function decreaseState() {
    
    if(current_state > 1) {
        current_state--
        btnPrev.disabled = false;
        btnNext.disabled = false;
        changeBorderStyle()
    }   

    if(current_state === 1)
        btnPrev.disabled = true;
    
    progressBar.style.width = `${((current_state - 1) / (steps.length - 1))*100}%`;
}

btnPrev.addEventListener('click', decreaseState)
btnNext.addEventListener('click', increaseState)