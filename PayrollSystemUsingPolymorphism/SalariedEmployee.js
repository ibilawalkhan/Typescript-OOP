"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class SalariedEmployee extends Employee_1.default {
    constructor(first, last, ssn, salary) {
        super(first, last, ssn);
        this.weeklySalary = 0;
        this.setWeeklySalary(salary);
    }
    setWeeklySalary(salary) {
        if (salary > 0) {
            this.weeklySalary = salary;
        }
        else {
            console.log("Salary must be greater than 0");
        }
    }
    getWeeklySalary() {
        return this.weeklySalary;
    }
    earnings() {
        return this.getWeeklySalary();
    }
    display() {
        return `${super.toString()}, Weekly Salary: ${this.getWeeklySalary()}`;
    }
}
exports.default = SalariedEmployee;
