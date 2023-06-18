// Object
//Bai1
var person = {name:"Thanh",
age: 22,
ocupation:"Student",
displayInformation: function () {
    return(this.name +" "+ this.age +" "+ this.ocupation);
}}
console.log(person.displayInformation());

var calculator = {value: 0,
            display: function () {
                return this.value;
            },
            add: function (x) {
                return calculator.value = this.value + x;
            },
            subtract: function (y) {
                return calculator.value = this.value - y;
            },        
            divide: function (z) {
                return calculator.value = this.value / z;
            },  
            multiply: function (w) {
                return calculator.value = this.value * w;
            },  
        }
console.log(calculator.add(3));
console.log(calculator.multiply(3));
//Bai3
var birthDay = new Date(birthDay).getFullYear();
var currentDay = new Date().getFullYear();
function calculateAge(birthDay){
    return currentDay - birthDay;
}
var yourAge = calculateAge("2001");
console.log(yourAge);

var newYearDate = new Date("Jan 1 2024");
// newYearDate.setFullYear((new Date()).getFullYear() + 1 );
var currDay = new Date();
var daysLeft = (newYearDate - currDay) / (24 * 60 * 60 * 1000);
console.log(Math.floor(daysLeft));

//Bai2
function EvenOdd (a){
    (a % 2 == 0) ? console.log("True") : console.log("False");
}
EvenOdd(3);

var isLeapYear = function(year) {
    (year % 4===0 && year%100 !==0 && year % 400 !==0) || (year%100===0 && year % 400===0)? console.log("LeapYear") : console.log("NotLeapYear")
}

isLeapYear(2023);