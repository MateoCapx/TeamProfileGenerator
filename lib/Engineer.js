const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github,role) {
        super(name, id, email,role)
        this.github = github
        this.role = 'Engineer'
    }
    getRole() {
        return 'Enigneer'
    }

    getGithub() {
        return this.github
    }

}

module.exports = Engineer;