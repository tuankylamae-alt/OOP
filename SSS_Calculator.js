const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class SSSCalculator {
    constructor(salary) {
        this.salary = salary;
        this.rate = 0.05; // 5% employee contribution
    }

    calculateSSS() {
        return this.salary * this.rate;
    }

    showResult() {
        console.log("Monthly Salary: ₱" + this.salary);
        console.log("SSS Contribution: ₱" + this.calculateSSS());
    }
}

rl.question("Enter your monthly salary: ", function(input) {

    let salary = Number(input);

    let calculator = new SSSCalculator(salary);

    calculator.showResult();

    rl.close();
});

