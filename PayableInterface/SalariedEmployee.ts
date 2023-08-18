import Employee from "./Employee";

class SalariedEmployee extends Employee {

    private weeklySalary: number = 0;

    constructor(first: string, last: string, ssn: string, salary: number) {
        super(first, last, ssn);
        this.setWeeklySalary(salary);
    }

    setWeeklySalary(salary: number): void {
        if (salary > 0) {
            this.weeklySalary = salary;
        } else {
            console.log("Salary must be greater than 0");
        }
    }

    getWeeklySalary(): number {
        return this.weeklySalary;
    }

    getPaymentAmount(): number {
        return this.getWeeklySalary();
    }

    toString(): string {
        return `salaried employee: ${super.toString()}, weekly salary ${this.getWeeklySalary()}`
    }

}

export default SalariedEmployee;