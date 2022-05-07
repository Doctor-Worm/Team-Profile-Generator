const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, position, id, email, school) {
        super(name, position, id, email);
    
    this.position = 'Intern';
    this.school = school;
    }
};

module.exports = Intern;