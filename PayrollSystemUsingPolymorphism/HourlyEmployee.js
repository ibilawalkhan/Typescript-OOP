"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class HourlyEmployee extends Employee_1.default {
    constructor(first, last, ssn, hourlyWage, hoursWorked) {
        super(first, last, ssn);
        this.wage = 0;
        this.hours = 0;
        this.setWage(hourlyWage);
        this.setHours(hoursWorked);
    }
    setHours(hoursWorked) {
        if ((hoursWorked >= 0) && (hoursWorked <= 168)) {
            this.hours = hoursWorked;
        }
        else {
            console.log("Hours worked must be >= 0.0 and <= 168.0");
        }
    }
    getHours() {
        return this.hours;
    }
    setWage(hourlyWage) {
        if (hourlyWage >= 0.0) {
            this.wage = hourlyWage;
        }
        else {
            console.log("Hourly wage must be >= 0.0");
        }
    }
    getWage() {
        return this.wage;
    }
    earnings() {
        if (this.getHours() <= 40) // no overtime
            return this.getWage() * this.getHours();
        else
            return 40 * this.getWage() + (this.getHours() - 40) * this.getWage() * 1.5;
    }
    display() {
        return `${super.display()}, Hourly Wage: ${this.getWage()}, Hours Worked: ${this.getHours()}`;
    }
}
exports.default = HourlyEmployee;
