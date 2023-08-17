import SalariedEmployee from './SalariedEmployee';
import HourlyEmployee from './HourlyEmployee';
import CommissionEmployee from './CommissionEmployee';
import BasePlusCommissionEmployee from './BasePlusCommissionEmployee';

class PayrollSystemTest {
    public main() {
        const salariedEmployee = new SalariedEmployee("John", "Smith", "111-11-1111", 800.00);
        const hourlyEmployee = new HourlyEmployee("Karen", "Price", "222-22-2222", 16.75, 40);
        const commissionEmployee = new CommissionEmployee("Sue", "Jones", "333-33-3333", 10000, .06);
        const basePlusCommissionEmployee = new BasePlusCommissionEmployee("Bob", "Lewis", "444-44-4444", 5000, .04, 300);

        console.log(salariedEmployee)
        console.log(hourlyEmployee)
        console.log(commissionEmployee)
        console.log(basePlusCommissionEmployee)
    }
}

const payrollSystemTest = new PayrollSystemTest();
payrollSystemTest.main();
