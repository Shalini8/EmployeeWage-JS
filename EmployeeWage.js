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

//Assigning variables value as const as our intention is never changing there values
const IS_PART_TIME =1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;


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
let totalEmpHours = 0;
let totalWorkingDays = 0;
while ( totalEmpHours <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS ){
        totalWorkingDays ++;
        let empCheckHrs = Math.floor((Math.random() * 10) % 3);
        totalEmpHours += getWorkingHours(empCheckHrs);
}

let empWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Total Days :" + totalWorkingDays + "  working hrs is: " + totalEmpHours +"hrs" ,"Employee wage is $" + empWage);