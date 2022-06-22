const inquirer = require('inquirer');  // In place to be able to use the inquirer package from NPM
// const generateSite = require('../TeamProfileGenerator/lib/Employee'); // Grabbing this file and using it with this application
const fs = require('fs');
const generatePage = require('./src/generatePage');
const render = require("./src/generatePage.js");


//lib modules
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');



const arrayData = [];

// return inquirer
const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'Name',
                message: 'Enter Your Name (Required)',
                validate: enterName => {
                    if (enterName) {
                        return true;
                    } else {
                        console.log('You need to enter a Team member name!');
                        return false;
                    }
                }
            },


            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter Employee ID (Required)',
                validate: employeeInput => {
                    const pass = employeeInput.match(/^[1-9]\d*$/) //<-- Validate a number
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid employee ID";
                }
            },


            {
                type: 'input',
                name: 'emailAddress',
                message: 'Enter Email Address (Required)',
                validate: emailInput => {
                    const pass = emailInput.match(/\S+@\S+\.\S+/) //<-- Validate a email address
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },

            {
                type: 'list',
                name: 'role',
                message: 'What is Your Role?',
                choices: ['Engineer', 'Intern', , 'Manager', 'Finish Building My Team'],
            }
        ])


    // Addition questions for Engineer  
    if (answers.role === 'Engineer') {
        const engineerQuestions = await inquirer
            .prompt([

                {
                    type: 'input',
                    name: 'gitHub',
                    message: 'Enter Engineer GitHub Username',
                    validate: gitHubUsername => {
                        // validaing to make sure user inputs a correct URL 
                        const pass = gitHubUsername.match('^(https?:\\/\\/)?' + // protocol
                            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                            '(\\#[-a-z\\d_]*)?$', 'i'); //) //<-- Validate a number
                        if (pass) {
                            return true;
                        }
                        return "Please enter a valid office number";
                    }
                },
            ])

        const newEngineer = new Engineer(
            answers.Name,
            answers.employeeId,
            answers.emailAddress,
            engineerQuestions.gitHub,
        )


        arrayData.push(newEngineer),
            console.log(arrayData)

    }


    if (answers.role === 'Manager') {
        const managerQuestions = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter Office number!',
                    validate: officeNumberInput => {
                        const pass = officeNumberInput.match(/^[1-9]\d*$/) //<-- Validate a number
                        if (pass) {
                            return true;
                        }
                        return "Please enter a valid office number";
                    }
                },
            ])

        const newManager = new Manager(
            answers.Name,
            answers.employeeId,
            answers.emailAddress,
            managerQuestions.officeNumber,
        )

        arrayData.push(newManager),
            console.log(arrayData)

    }





    if (answers.role === 'Intern') {
        const internQuestions = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'School',
                    message: 'Enter Intern School',
                },
            ])


        const newIntern = new Intern(
            answers.Name,
            answers.employeeId,
            answers.emailAddress,
            internQuestions.School,
        )

        arrayData.push(newIntern),
            console.log(arrayData)

    }
}




async function promptQuestions() {
    await questions()

    const addMemeberAnswer = await inquirer
        .prompt([
            {
                name: 'addMember',
                type: 'list',
                choices: ['Add a Member', 'Create Team'],
                message: " What would you like to do next? "
            }
        ])
    if (addMemeberAnswer.addMember === 'Add a Member') {
        return questions()
    }
    return createTeam();
}

promptQuestions();


function createTeam() {
    console.log(" Heyyyyyyyyyyy !!!!!!!!!!!!!!!!!")
    fs.writeFileSync('./dist/index.html', generatePage(arrayData), err => {
        if (err) {
            console.log(err)
        } else {
            console.log(" Page created! Check out index.html in this directory to see it! ")
        }
    })


    questions();

}

// .then(function(data){
//     console.log(`Heyy ${JSON.stringify(data)}`)

//     fs.writeFile('./README.md', generateSite(data), err=>{
//       if(err){
//         console.log(err)
//       }else{
//         console.log(" Works ")
//       }
//     })
//   }