// coding challenge 5

// adding employee array/step 2

console.log(`---inital employee array with hours worked and rate---`)

let employees = [

{name: "Jamie James" , hourlyRate: 20 , hoursWorked: 100        }, 
{name: "Tabitha Helen" , hourlyRate: 30 , hoursWorked: 200      },        
{name: "Thomas Shields" , hourlyRate: 15.25 , hoursWorked: 130  },
{name: "Palinko Pinko" , hourlyRate: 90.50 , hoursWorked: 76   },

]
console.log(employees);


// function that returns pay/step 3

function calculateBasePay (rate, hours) {
    if (hours <= 40) {
        return hours * rate;

    } else {
        return 40 * rate;
    }

}

// calculating OVertime/step 4

function calculateOvertimePay (rate, hours) {
    overtimeHours = hours - 40
        return overtimeHours * (rate *1.5);
}

// calculating taxes/step 5

function calculateTaxes (grossPay) {
    tax = 0.15 * grossPay
    return grossPay - tax
}

// process payroll/step 6 
console.log(`\n---process payroll---`)

function processPayroll (employee) {
let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
let grossPay = (basePay+overtimePay);
let netPay = calculateTaxes(grossPay);
return {
name: employee.name, basePay: basePay, overtimePay: overtimePay, grossPay: grossPay, netPay: netPay
};
};

//looping through array/step 7 

employees.forEach(employee => {
console.log(processPayroll(employee));
});