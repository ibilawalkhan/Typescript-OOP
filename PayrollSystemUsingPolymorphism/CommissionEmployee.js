"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class CommissionEmployee extends Employee_1.default {
    constructor(first, last, ssn, sales, rate) {
        super(first, last, ssn);
        this.grossSales = 0;
        this.commissionRate = 0;
        this.setGrossSales(sales);
        this.setCommissionRate(rate);
    }
    setGrossSales(rate) {
        if (rate > 0.0 && rate < 1.0)
            this.commissionRate = rate;
        else
            console.log("Commission rate must be > 0.0 and < 1.0");
    }
    getGrossSales() {
        return this.grossSales;
    }
    setCommissionRate(rate) {
        if (rate > 0.0 && rate < 1.0)
            this.commissionRate = rate;
        else
            console.log("Commission rate must be > 0.0 and < 1.0");
    }
    getCommissionRate() {
        return this.commissionRate;
    }
    earnings() {
        return this.getCommissionRate() * this.getGrossSales();
    }
    display() {
        return `Commission Employee ${super.display()}, gross sales ${this.getGrossSales()}, commission rate ${this.getCommissionRate()}`;
    }
}
exports.default = CommissionEmployee;
