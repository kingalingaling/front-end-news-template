//Page IDs
const p_info = document.getElementById('step-1')
const select_plan = document.getElementById('step-2')
const add_ons = document.getElementById('step-3')
const summary = document.getElementById('step-4')
const thanks = document.getElementById('step-5')

// Navigation IDs
const nav_step_1 = document.querySelector("#step_nav_1");
const nav_step_2 = document.querySelector("#step_nav_2");
const nav_step_3 = document.querySelector("#step_nav_3");
const nav_step_4 = document.querySelector("#step_nav_4");

/* Plan Label IDs
const arcade_label = document.querySelector('#arcade-label');
const advanced_label = document.querySelector('#advanced-label');
const pro_label = document.querySelector('#pro-label'); */

const arcade_label = document.getElementById('arcade-label');
const advanced_label = document.getElementById('advanced-label');
const pro_label = document.getElementById('pro-label');

/* Plan IDs
let arcade = document.querySelector("#arcade");
let advanced = document.querySelector("#advanced");
let pro = document.querySelector("#pro"); */

let arcade = document.getElementById("arcade");
let advanced = document.getElementById("advanced");
let pro = document.getElementById("pro");

//Submit IDs
const p_info_button = document.getElementById('submit-p-info')
const select_plan_button = document.getElementById('submit-plan')
const add_ons_button = document.getElementById('submit-add-ons')
const finalize = document.getElementById('confirm')

//Back IDs
const back_to_step_1 = document.getElementById('back-to-step-1')
const back_to_step_2 = document.getElementById('back-to-step-2')
const back_to_step_3 = document.getElementById('back-to-step-3')


// STEP 1 VALIDATION
p_info_button.addEventListener('click', function () {
    let info_store = validateInfo(fieldName=['name', 'email', 'phone'], errorName=['nameError', 'emailError', 'phoneError'], current=p_info, next=select_plan) 
    
    if (info_store) {
        nav_step_1.classList.remove('active');
        nav_step_2.classList.add('active');
    } 

    // encapsulation, inheritance, polymophism, abstraction
})

function validateInfo(fieldName, errorName, current, next) {
    let valid = true
    let information = {

    }
    let errCount = 0

    for(let i = 0; i < fieldName.length; i++) {
        const field = document.getElementById(fieldName[i])
        const error = document.getElementById(errorName[i])
        if (!field.value) {
            error.classList.add('visible')
            field.classList.add('invalid')
            errCount++
        } else {
            localStorage.setItem(fieldName[i], field.value)
            error.classList.remove('visible')
            field.classList.remove('invalid')            
        }
    }
    console.log(`No. of empty fields - ${errCount}`)
    if (errCount < 1){
        current.classList.remove('show')
        next.classList.add('show')
    }

    return valid;
}

//STEP 2 Reactivity?
let labels = [arcade_label, advanced_label, pro_label];
let plans = [arcade, advanced, pro];
//let plans = document.querySelectorAll("input[name=plans]");
console.log(arcade)
/* for (let i = 0; i < plans.length; i++) {
    plans[i].addEventListener('change', function() {
        if (plans[i].checked){
            labels[i].classList.add('plan-active')
        } else {
            labels[i].classList.remove('plan-active')
        }
  })
}

/* for (let i=0; i<labels.length; i++) {
    if (plans[i].checked) {
        labels[i].classList.add('plan-active');
    } else {
        labels[i].classList.remove('plan-active');
    }
} */

// STEP 2 VALIDATION
select_plan_button.addEventListener('click', () => {
    validatePlan(current = select_plan, next = add_ons);
})

function validatePlan(current, next) {
    let selected_plan = "";

    for (let i = 0; i < plans.length; i++) {
        if (plans[i].checked) {
            selected_plan = plans[i].value;
        }
    }

    // localStorage.setItem("yearly_plan", plans[i].value)

    if (!selected_plan == "") {
        localStorage.setItem("monthly_plan", selected_plan)
        nav_step_2.classList.remove('active');
        nav_step_3.classList.add('active');
        current.classList.remove('show');
        next.classList.add('show');
    } 

    return selected_plan;
}


// STEP 3 ADD-ONS





// STEP 4 SUMMARY
if (summary.classList.contains('show')) {
    const monthly = localStorage.getItem('monthly_plan');
    const addons = localStorage.getItem('add_ons');

    document.getElementById("monthly").innerHTML = monthly;
}

let clicks_forward = [p_info_button, select_plan_button, add_ons_button, finalize] //4
let clicks_backward = [back_to_step_1, back_to_step_2, back_to_step_3] //3
let pages = [p_info, select_plan, add_ons, summary, thanks] //5
// pages: 0,1,2,3,4
let navigs = [nav_step_1, nav_step_2, nav_step_3, nav_step_4]; //4

for (let click of clicks_backward) {
    let num = clicks_backward.indexOf(click);

    console.log(click)

    click.addEventListener('click', () => {
        pages[num].classList.add('show');
        navigs[num].classList.add('active');

        for (let i = 0; i < pages.length - 2; i++) {
            if (num !== i) {
                pages[i].classList.remove('show');
                navigs[i].classList.remove('active');
            }
        }
    })  

}

// "5" != 5 // TRUE
// "5" !== 5 //FALSE