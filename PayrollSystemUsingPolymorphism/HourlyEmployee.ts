import Employee from './Employee';

class HourlyEmployee extends Employee {
    private wage: number = 0;
    private hours: number = 0;

    constructor(first: string, last: string, ssn: string, hourlyWage: number, hoursWorked: number) {
        super(first, last, ssn);
        this.setWage(hourlyWage);
        this.setHours(hoursWorked);
    }

    private setHours(hoursWorked: number) {
        if ((hoursWorked >= 0) && (hoursWorked <= 168)) {
            this.hours = hoursWorked;
        } else {
            console.log("Hours worked must be >= 0.0 and <= 168.0");
        }
    }

    private getHours(): number {
        return this.hours;
    }

    private setWage(hourlyWage: number) {
        if (hourlyWage >= 0.0) {
            this.wage = hourlyWage;
        } else {
            console.log("Hourly wage must be >= 0.0")
        }
    }

    private getWage(): number {
        return this.wage;
    }

    earnings(): number {
        if (this.getHours() <= 40) // no overtime
            return this.getWage() * this.getHours();
        else
            return 40 * this.getWage() + (this.getHours() - 40) * this.getWage() * 1.5;
    }

    display(): string {
        return `${super.display()}, Hourly Wage: ${this.getWage()}, Hours Worked: ${this.getHours()}`;
    }
}

export default HourlyEmployee;
