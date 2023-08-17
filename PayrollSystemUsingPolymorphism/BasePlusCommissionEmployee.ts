import CommissionEmployee from "./CommissionEmployee";

class BasePlusCommissionEmployee extends CommissionEmployee {
    private baseSalary: number = 0;

    constructor(first: string, last: string, ssn: string, sales: number, rate: number, salary: number) {
        super(first, last, ssn, sales, rate);
        this.setBaseSalary(salary);
    }

    private setBaseSalary(salary: number) {
        if (salary >= 0.0) {
            this.baseSalary = salary;
        } else {
            console.log("Base salary must be >= 0.0");
        }
    }

    private getBaseSalary(): number {
        return this.baseSalary;
    }

    earnings(): number {
        return this.getBaseSalary() + super.earnings();
    }

    display(): string {
        return `base-salaried ${super.toString()}, base salary ${this.getBaseSalary()}`
    }
}

export default BasePlusCommissionEmployee;