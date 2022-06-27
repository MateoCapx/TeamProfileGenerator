const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, School,role) {
        super(name, id, email,role)
        this.School = School
        this.role = 'Intern'

    }
    getRole() {
        return 'Intern'
    }

    getSchool() {
        return this.School
    }

}

module.exports = Intern;