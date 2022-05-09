const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');


function createTeam() {
    this.manager;
    this.engineer;
    this.intern;
    this.team = {};
    this.team.employees = [];
};


createTeam.prototype.promptManager = function() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is your team manager's name?"
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is their employee ID?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email address?'
            },
            {
                type: 'text',
                name: 'office',
                message: 'What is their office number?'
            }
        ])
        .then(({ name, id, email, office }) => {
            this.manager = new Manager(name);
            this.manager.id = id;
            this.manager.email = email;
            this.manager.office = office;
            this.team.employees.push(this.manager);
            // console.log(this.manager);
            // console.log(this.employees);

            this.promptNextOption();
        });
};


createTeam.prototype.promptNextOption = function() {
    inquirer
        .prompt({
            type: 'checkbox',
            name: 'option',
            message: 'How would you like to continue building your team?',
            choices: ['Add an engineer', 'Add an intern', "I'm finished building my team"]
        })
        .then(({ option }) => {
            // console.log(option);
            if (option == 'Add an engineer') {
                console.log('Adding an Engineer!');
                this.promptEngineer();
            }
            else if (option == 'Add an intern') {
                console.log('Adding an Intern!');
                this.promptIntern();
            }
            else {
                // generate page
                console.log('Generating your team!');
                console.log(this.team);
                // console.log(this.employees);
                async function generateFiles(userData) {
                    let fileContent = await generatePage(userData);
                    console.log('file content generated');
                    const processedFile = await writeFile(fileContent);
                    console.log(processedFile);
                    const copyResponse = await copyFile();
                    console.log(copyResponse);
                }
                generateFiles(this.team);
            }
            
        });
};


createTeam.prototype.promptEngineer = function() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is their employee ID?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email address?'
            },
            {
                type: 'text',
                name: 'github',
                message: 'What is their GitHub username?'
            }
        ])
        .then(({ name, id, email, github }) => {
            this.engineer = new Engineer(name);
            this.engineer.id = id;
            this.engineer.email = email;
            this.engineer.github = github;
            this.team.employees.push(this.engineer);
            // console.log(this.engineer);
            // console.log(this.employees);

            this.promptNextOption();
        });
};



createTeam.prototype.promptIntern = function() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is their employee ID?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email address?'
            },
            {
                type: 'text',
                name: 'school',
                message: 'What school do/did they attend?'
            }
        ])
        .then(({ name, id, email, school }) => {
            this.intern = new Intern(name);
            this.intern.id = id;
            this.intern.email = email;
            this.intern.school = school;
            this.team.employees.push(this.intern);
            // console.log(this.intern);
            // console.log(this.employees);

            this.promptNextOption();
        });
};


new createTeam().promptManager();
    