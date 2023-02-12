const p_info = document.getElementById('step-1')
const p_info_button = document.getElementById('submit-p-info')
const select_plan = document.getElementById('step-2')
const select_plan_button = document.getElementById('submit-plan') 
const back_to_step_1 = document.getElementById('back-to-step-1')
const add_ons = document.getElementById('step-3')
const add_ons_button = document.getElementById('submit-add-ons')
const back_to_step_2 = document.getElementById('back-to-step-2')
const summary = document.getElementById('step-4')
const finalize = document.getElementById('confirm')
const back_to_step_3 = document.getElementById('back-to-step-3')
const thanks = document.getElementById('step-5')

let clicks_forward = [p_info_button, select_plan_button, add_ons_button, finalize]
let clicks_backward = [back_to_step_1, back_to_step_2, back_to_step_3]
let pages = [p_info, select_plan, add_ons, summary, thanks]

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
        pages[num+1].classList.remove('show')
        pages[num].classList.add('show')
    }
}