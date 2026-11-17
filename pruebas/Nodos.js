const Node = require("../src/Nodo.js")

const vacunation = new Node({
    date: "02/02",
    motive: "vacunation",
    veterinarian: "Dr.Ríos",
    cost: 85000
})

const weightControl = new Node({
    date: "15/03",
    motive: "Weight Control",
    veterinarian: "Dr.Gómez",
    cost: 40000
})

const dentalCleaning = new Node({
    date: "20/05",
    motive: "Dental Cleaning",
    veterinarian: "Dr.Ríos",
    cost: 150000
})

vacunation.next = weightControl;
weightControl.next = dentalCleaning;
dentalCleaning.next = null;

const head = vacunation;


let now = head
while (now !== null){
    // console.log("node: ", now)
    now = now.next
}

now = head
let costTotal = 0
while (now !== null){
    costTotal += now.data.cost
    now = now.next
}
// console.log(costTotal)