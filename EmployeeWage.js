//Generating a random number
let employeeChecker =  Math.floor((Math.random() * 10) % 2);

const IS_ABSENT = 0;

const IS_PRESENT = 1;

//If-Else statement to check for employee is absent or present..
if (employeeChecker == IS_ABSENT) {
    console.log("Employee is present!");
} else {
    console.log("Employee is Absent!");
}

//Generating a random number
let empCheckHrs = Math.floor((Math.random() * 10) % 3);

//Assigning variables value as const as our intention is never changing there values
const IS_PART_TIME =1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHours = 0;
 //Function of switch case to calculate wage according to random values generated

function getWorkingHours(empCheckHrs){
    switch(empCheckHrs) {
        case 1:
            return PART_TIME_HOURS;
    
        case 2:
            return FULL_TIME_HOURS;

        default:
            return 0;

    }
}

empHours = getWorkingHours(empCheckHrs);
let empWage = empHours * WAGE_PER_HOUR;
console.log("working hrs is: " + empHours ,"Employee wage is $" + empWage);