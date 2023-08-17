abstract class Employee {
    private firstName: string = "";
    private lastName: string = "";
    private socialSecurityNumber: string = "";

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

    display(): string {
        return `${this.getFirstName()}, ${this.getLastName()}, ${this.getSocialSecurityNumber()}`
    }

    abstract earnings(): number;

}

export default Employee