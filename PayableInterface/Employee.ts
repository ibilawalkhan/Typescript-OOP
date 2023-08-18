import Payable from "./Payable";

abstract class Employee implements Payable {

    firstName: string = "";
    lastName: string = "";
    socialSecurityNumber: string = "";

    constructor(first: string, last: string, ssn: string) {
        this.firstName = first;
        this.lastName = last;
        this.socialSecurityNumber = ssn;
    }

    setFirstName(first: string): void {
        this.firstName = first;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setLastName(last: string): void {
        this.lastName = last;
    }

    getLastName(): string {
        return this.lastName;
    }

    setSocialSecurityNumber(ssn: string): void {
        this.socialSecurityNumber = ssn;
    }

    getSocialSecurityNumber(): string {
        return this.socialSecurityNumber;
    }

    toString(): string {
        return `First name: ${this.getFirstName()}, Last name: ${this.getLastName()}, social security number ${this.getSocialSecurityNumber()}}`
    }
    
    getPaymentAmount(): number {
        throw new Error("Method not implemented.");
    }
}

export default Employee;