const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, School) {
        super(name, id, email)
        this.School = School
    }
    getRole() {
        return 'Intern'
    }

    getSchool() {
        return this.School
    }

}

module.exports = Intern;