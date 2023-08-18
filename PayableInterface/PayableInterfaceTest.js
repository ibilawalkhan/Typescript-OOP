"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = __importDefault(require("./Invoice"));
const SalariedEmployee_1 = __importDefault(require("./SalariedEmployee"));
class PayableInterfaceTest {
    main() {
        let payableObjects = [];
        payableObjects[0] = new Invoice_1.default("01234", "seat", 2, 375.00);
        payableObjects[1] = new Invoice_1.default("56789", "tire", 4, 79.95);
        payableObjects[2] = new SalariedEmployee_1.default("John", "Smith", "111-11-1111", 800.00);
        payableObjects[3] = new SalariedEmployee_1.default("Lisa", "Barnes", "888-88-8888", 1200.00);
        console.log("Invoices and Employees processed polymorphically:\n");
        for (let i = 0; i < payableObjects.length; i++) {
            console.log(`${payableObjects[i].toString()}`);
        }
    }
}
const payableInterfaceTest = new PayableInterfaceTest();
payableInterfaceTest.main();
