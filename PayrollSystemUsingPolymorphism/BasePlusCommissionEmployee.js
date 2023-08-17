"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommissionEmployee_1 = __importDefault(require("./CommissionEmployee"));
class BasePlusCommissionEmployee extends CommissionEmployee_1.default {
    constructor(first, last, ssn, sales, rate, salary) {
        super(first, last, ssn, sales, rate);
        this.baseSalary = 0;
        this.setBaseSalary(salary);
    }
    setBaseSalary(salary) {
        if (salary >= 0.0) {
            this.baseSalary = salary;
        }
        else {
            console.log("Base salary must be >= 0.0");
        }
    }
    getBaseSalary() {
        return this.baseSalary;
    }
    earnings() {
        return this.getBaseSalary() + super.earnings();
    }
    display() {
        return `base-salaried ${super.toString()}, base salary ${this.getBaseSalary()}`;
    }
}
exports.default = BasePlusCommissionEmployee;
