//Generating a random number
let employeeChecker =  Math.floor((Math.random() * 10) % 2);

//Assigning varaibles value as const as our intention is never changing there values
const IS_ABSENT = 0;

const IS_PRESENT = 1;

//If-Else statement to check for presence and absence of employee
if (employeeChecker == IS_ABSENT) {
    console.log("Employee is present!");
} else {
    console.log("Employee is Absent!");
}
