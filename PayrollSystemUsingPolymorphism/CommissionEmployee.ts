import Employee from './Employee';

class CommissionEmployee extends Employee {

    private grossSales: number = 0;
    private commissionRate: number = 0;

    constructor(first: string, last: string, ssn: string, sales: number, rate: number) {
        super(first, last, ssn);
        this.setGrossSales(sales);
        this.setCommissionRate(rate);
    }

    private setGrossSales(rate: number) {
        if (rate > 0.0 && rate < 1.0)
            this.commissionRate = rate;
        else
            console.log("Commission rate must be > 0.0 and < 1.0");
    }

    private getGrossSales(): number {
        return this.grossSales;
    }

    private setCommissionRate(rate: number) {
        if (rate > 0.0 && rate < 1.0)
            this.commissionRate = rate;
        else
            console.log("Commission rate must be > 0.0 and < 1.0");
    }

    private getCommissionRate(): number {
        return this.commissionRate;
    }

    earnings(): number {
        return this.getCommissionRate() * this.getGrossSales();
    }

    display(): string {
        return `Commission Employee ${super.display()}, gross sales ${this.getGrossSales()}, commission rate ${this.getCommissionRate()}`
    }

}

export default CommissionEmployee;