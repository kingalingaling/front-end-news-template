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

p_info_button.onclick = function (){
    p_info.classList.remove('show')
    select_plan.classList.add('show')
}

select_plan_button.onclick = function() {
    select_plan.classList.remove('show')
    add_ons.classList.add('show')
}

back_to_step_1.onclick = function() {
    select_plan.classList.remove('show')
    p_info.classList.add('show')
}

add_ons_button.onclick = function() {
    add_ons.classList.remove('show')
    summary.classList.add('show')
}

back_to_step_2.onclick = function() {
    add_ons.classList.remove('show')
    select_plan.classList.add('show')
}

finalize.onclick = function() {
    summary.classList.remove('show')
    thanks.classList.add('show')
    document.getElementsByClassName('progress-mobile').display = 'none'
}

back_to_step_3.onclick = function() {
    summary.classList.remove('show')
    add_ons.classList.add('show')
}

/* if (p_info.classList.contains('show')) {
    console.log('yeah')
} else {
    console.log('Nope')
} */

/* document.getElementById('submit-p-info').submit = function() {
    document.getElementById('step-1').classList.remove('show')
    document.getElementById('step-2').classList.add('show')
} */