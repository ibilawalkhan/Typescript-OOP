"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SalariedEmployee_1 = __importDefault(require("./SalariedEmployee"));
const HourlyEmployee_1 = __importDefault(require("./HourlyEmployee"));
const CommissionEmployee_1 = __importDefault(require("./CommissionEmployee"));
const BasePlusCommissionEmployee_1 = __importDefault(require("./BasePlusCommissionEmployee"));
class PayrollSystemTest {
    main() {
        const salariedEmployee = new SalariedEmployee_1.default("John", "Smith", "111-11-1111", 800.00);
        const hourlyEmployee = new HourlyEmployee_1.default("Karen", "Price", "222-22-2222", 16.75, 40);
        const commissionEmployee = new CommissionEmployee_1.default("Sue", "Jones", "333-33-3333", 10000, .06);
        const basePlusCommissionEmployee = new BasePlusCommissionEmployee_1.default("Bob", "Lewis", "444-44-4444", 5000, .04, 300);
        console.log(salariedEmployee);
        console.log(hourlyEmployee);
        console.log(commissionEmployee);
        console.log(basePlusCommissionEmployee);
    }
}
const payrollSystemTest = new PayrollSystemTest();
payrollSystemTest.main();
