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

// Add-On IDs
const online_service = document.getElementById('online-service')
const larger_storage = document.getElementById('larger-storage')
const custom_profile = document.getElementById('cust-profile')

//Submit IDs
const p_info_button = document.getElementById('submit-p-info')
const select_plan_button = document.getElementById('submit-plan')
const add_ons_button = document.getElementById('submit-add-ons')
const finalize = document.getElementById('confirm')

//Back IDs
const back_to_step_1 = document.getElementById('back-to-step-1')
const back_to_step_2 = document.getElementById('back-to-step-2')
const back_to_step_3 = document.getElementById('back-to-step-3')

//Add-On Texts
var monthly_add_ons = document.querySelectorAll('.monthly-add-ons')
var yearly_add_ons = document.querySelectorAll('.yearly-add-ons')
let add_on_disp = localStorage.getItem('plan-type')


const clicks_forward = [p_info_button, select_plan_button, add_ons_button, finalize] //4
const clicks_backward = [back_to_step_1, back_to_step_2, back_to_step_3] //3
const pages = [p_info, select_plan, add_ons, summary, thanks] //5
// pages: 0,1,2,3,4
const navigs = [nav_step_1, nav_step_2, nav_step_3, nav_step_4]; //4


document.addEventListener('DOMContentLoaded', () => {

    let step_status = localStorage.getItem('current_step');
    
    if (step_status == undefined || 0) {
        navigs[0].classList.add('active')
        pages[0].classList.add('show')
        localStorage.setItem('current_step', 1);

    } else if (step_status == 1){
        navigs[0].classList.add('active')
        pages[0].classList.add('show')

    } else if (step_status >= 2) {
        // append the active class to the current step navigation
        navigs[step_status - 2].classList.remove('active');
        navigs[step_status - 1].classList.add('active');

        // append the show class to the current step page
        pages[step_status - 2].classList.remove('show');
        pages[step_status - 1].classList.add('show');

    } else if (step_status == 5) {

        navigs[step_status - 2].classList.remove('active');
        pages[step_status - 2].classList.remove('show');
        pages[step_status - 1].classList.add('show');
        localStorage.clear();
    }
    
})

// STEP 1 VALIDATION
p_info_button.addEventListener('click', function () {
    let info_store = validateInfo(fieldName=['name', 'email', 'phone'], errorName=['nameError', 'emailError', 'phoneError'], current=p_info, next=select_plan) 
    
    // if (info_store) {
        
    // } 

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
        nav_step_1.classList.remove('active');
        nav_step_2.classList.add('active');
        localStorage.setItem('current_step', 2);
    }

    return valid;
}

//STEP 2 Reactivity?
let labels = [arcade_label, advanced_label, pro_label];
let plans = [arcade, advanced, pro];


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
        localStorage.setItem('current_step', 3);
        if (toggle.checked) {
            localStorage.setItem('plan-type', 'yearly')
        } else {
            localStorage.setItem('plan-type', 'monthly')
        }

        let add_on_disp = localStorage.getItem('plan-type')
        if (add_on_disp == 'yearly') {
            monthly_add_ons.forEach((month_add_on) => {
                month_add_on.classList.add('hide');
            })
            yearly_add_ons.forEach((year_add_on) => {
                year_add_on.classList.remove('hide')
            })
        } else {
            monthly_add_ons.forEach((month_add_on) => {
                month_add_on.classList.remove('hide');
            })
            yearly_add_ons.forEach((year_add_on) => {
                year_add_on.classList.add('hide')
            })
        }

    } 

    return selected_plan;
}

//Toggle Plan Duration (Monthly/Yearly)
const toggle = document.querySelector('#plan-duration')
const monthly_text = document.getElementById('monthly-span')
const yearly_text = document.getElementById('yearly-span')
var monthly_plan = document.querySelectorAll('.monthly-plan')
var yearly_plan = document.querySelectorAll('.yearly-plan')

console.log(monthly_plan)

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        monthly_plan.forEach((month_plan) => {
            month_plan.classList.add('hide');
        })
        yearly_plan.forEach((year_plan) => {
            year_plan.classList.remove('hide');
        })
        monthly_text.classList.remove('checked')
        yearly_text.classList.add('checked')
    } else {
        monthly_plan.forEach((month_plan) => {
            month_plan.classList.remove('hide');
        })
        yearly_plan.forEach((year_plan) => {
            year_plan.classList.add('hide');
        })
        monthly_text.classList.add('checked')
        yearly_text.classList.remove('checked')
    }
})

console.log(toggle.checked)

// STEP 3 ADD-ONS
//Toggle Add-ons price based on plan selected in step 2



let add_on_options = [online_service, larger_storage, custom_profile]
add_ons_button.addEventListener('click', () => {
    validateAddOns(current=add_ons, next=summary)
})

function validateAddOns(current, next) {
    let addOns_chosen = []

    for (let i = 0; i < add_on_options.length; i++) {
        if (add_on_options[i].checked) {
            addOns_chosen.push(add_on_options[i].value)
        } else {
            addon1 = 0
        }
    }
    
    console.log(addOns_chosen)

    if (addOns_chosen.length > 0) {
        localStorage.setItem('monthly_addOns', JSON.stringify(addOns_chosen));
    }

    nav_step_3.classList.remove('active');
    nav_step_4.classList.add('active');
    current.classList.remove('show');
    next.classList.add('show');
    localStorage.setItem('current_step', 4);

    return addOns_chosen
}



/*for (let i = 1; i < add_on_options.length; i++) {
    if (add_on_options[i].checked) {
        add_on_options[i].parentElement.classList.add('add-ons-checked')
    } else {
        add_on_options[i].parentElement.classList.remove('add-ons-checked')
    }
}*/




// STEP 4 SUMMARY
if (summary.classList.contains('show')) {
    const monthly = localStorage.getItem('monthly_plan');
    const addons = localStorage.getItem('add_ons');

    document.getElementById("monthly").innerHTML = monthly;
}


for (let click of clicks_backward) {
    let num = clicks_backward.indexOf(click);

    //console.log(click)

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