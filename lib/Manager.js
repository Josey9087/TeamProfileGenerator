const Employee = require('./Employee')

// Manager Class that is extends from the Employee Class and has 2 different functions
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;