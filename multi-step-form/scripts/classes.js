// JS CLASSES and JS Promises

// callback functions
const display = () => {
    console.log("Hello")
}

const resend = () => {
    console.log("sending messages")
    // location.reload()
}

// Asynchronous functions 
setInterval(display, 3000) // 3s
setTimeout(resend, 5000) // 5s

const savings = ["12,500", "80,000","200,000", "500,000", "3,000,000"]
let total = 0

const checkTotalSavings = new Promise(function(resolve, error) {
    // Producing Code: the part of the promise that takes time

    for (let i = 0; i <= savings.length; i++) {
        total += Number(savings[i].replaceAll(",",""));
        console.log(total)
        resolve(total)
    }
    
})

checkTotalSavings.then(
    // Consuming Code: the part of the promise that waits for the producing code to finish

    function() {
        if (total > 3000000){
            buyCarAndCelebrate("Audi", "I just bought my car!")
        }
        
    },
    function() {
        if (total < 3000000){
            buyCarAndCelebrate("Nothing", "Bruh, I haven't saved enough to buy my car!")
        }
    }
)

const buyCarAndCelebrate = (car, result) => {
    console.log(`${result}, the name of the car is ${car}`)
    return car;
}

// state: Fullfilled, Pending, Failed
// result: resolved, rejected

const buyCar = (name) => {
    result = console.log(name)
    return result
}



new Date()
const dishes = new Array()
dishes.push("Rice and Stew")
console.log(dishes)

class Car {
    constructor(name, year) {
        this.name = name,
        this.year = year
    }
    driveWarn() {
        console.warn('I am driving')
    }
}

// classes are JS Object templates

const myNewCar = new Car("Hyundai", "2020")
console.log(myNewCar.name)
myNewCar.driveWarn()


class User {
    constructor(name, phone, email) {
        this.name = name,
        this.phone = phone,
        this.email = email
    }
    signIn() {
        // call an API to sign in this user
    }
    buy() {
        // call an API to help this user user buy stuff
    }
}

const Paul = new User("Paul Ariti", "09067673746", "paulariti@gmail.com")
const Annabel = new User("Annabel")
Annabel.buy()

class Admin {
    constructor(name, phone, email, bvn) {
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.bvn = bvn
    }
    signIn() {
        // call an API to sign in this user
    }
    addAdmin() {
        // call an API to help this admin add another admin
    }
    static postProducts() {}
}

const Vivian = new User("Vivian Ariti")
Vivian.postProducts() //throw an error
Admin.postProducts()

// extends

// React class-based component
// React functional component