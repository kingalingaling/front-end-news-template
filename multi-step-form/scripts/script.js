//DiV IDs
const p_info = document.getElementById('step-1')
const select_plan = document.getElementById('step-2')
const add_ons = document.getElementById('step-3')
const summary = document.getElementById('step-4')
const thanks = document.getElementById('step-5')

//Submit IDs
const p_info_button = document.getElementById('submit-p-info')
const select_plan_button = document.getElementById('submit-plan')
const add_ons_button = document.getElementById('submit-add-ons')
const finalize = document.getElementById('confirm')

//Back IDs
const back_to_step_1 = document.getElementById('back-to-step-1')
const back_to_step_2 = document.getElementById('back-to-step-2')
const back_to_step_3 = document.getElementById('back-to-step-3')

p_info_button.addEventListener('click', function () {
    validate(fieldName=['name', 'email', 'phone'], errorName=['nameError', 'emailError', 'phoneError'], current=p_info, next=select_plan)
})

function validate(fieldName, errorName, current, next) {
    let valid = true
    let errCount = 0
    for(let i=0;i<fieldName.length;i++) {
        const field = document.getElementById(fieldName[i])
        const error = document.getElementById(errorName[i])
        if(!field.value) {
            error.classList.add('visible')
            field.classList.add('invalid')
            errCount++
        } else {
            error.classList.remove('visible')
            field.classList.remove('invalid')            
        }
    }
    console.log(`No. of empty fields - ${errCount}`)
    if(errCount < 1){
        current.classList.remove('show')
        next.classList.add('show')
    }
    return valid
}

let clicks_forward = [select_plan_button, add_ons_button, finalize]
let clicks_backward = [back_to_step_1, back_to_step_2, back_to_step_3]
let pages = [select_plan, add_ons, summary, thanks]

for (let click of clicks_forward) {
    let num = clicks_forward.indexOf(click)
    click.onclick = function() {
        pages[num].classList.remove('show')
        pages[num+1].classList.add('show')
    }
}

for (let click of clicks_backward) {
    let num = clicks_backward.indexOf(click)
    click.onclick = function() {
        if(num==0) {
            pages[num].classList.remove('show')
            p_info.classList.add('show')

        } else {
            pages[num].classList.remove('show')
            pages[num-1].classList.add('show')
        }
    }
}