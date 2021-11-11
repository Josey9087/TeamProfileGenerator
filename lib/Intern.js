const Employee = require('./Employee');

// Intern Class that is extends from the Employee Class and has 2 different functions
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;