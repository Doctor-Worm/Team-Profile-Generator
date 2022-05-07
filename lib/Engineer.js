const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, position, id, email, github) {
        super(name, position, id, email);
    
    this.position = 'Engineer';
    this.github = github;
    }
};

module.exports = Engineer;