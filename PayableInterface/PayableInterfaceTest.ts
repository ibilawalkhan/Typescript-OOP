import Payable from './Payable'
import Invoice from './Invoice';
import SalariedEmployee from './SalariedEmployee';

class PayableInterfaceTest {
    main(): void {
        let payableObjects: Payable[] = [];

        payableObjects[0] = new Invoice("01234", "seat", 2, 375.00);
        payableObjects[1] = new Invoice("56789", "tire", 4, 79.95);
        payableObjects[2] = new SalariedEmployee("John", "Smith", "111-11-1111", 800.00);
        payableObjects[3] = new SalariedEmployee("Lisa", "Barnes", "888-88-8888", 1200.00);

        console.log("Invoices and Employees processed polymorphically:\n");
        for (let i = 0; i < payableObjects.length; i++) {
            console.log(`${payableObjects[i].toString()}`);
        }
    }
}

const payableInterfaceTest = new PayableInterfaceTest();
payableInterfaceTest.main();
