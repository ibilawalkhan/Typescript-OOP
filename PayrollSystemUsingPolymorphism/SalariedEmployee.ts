import Employee from './Employee';

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

    earnings(): number {
        return this.getWeeklySalary();
    }

    display(): string {
        return `${super.toString()}, Weekly Salary: ${this.getWeeklySalary()}`
    }

}

export default SalariedEmployee;