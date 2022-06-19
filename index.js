const inquirer = require('inquirer');  // In place to be able to use the inquirer package from NPM
// const generateSite = require('../TeamProfileGenerator/lib/Employee'); // Grabbing this file and using it with this application
const fs = require("fs");
const generatePage = require('./src/generatePage');

//lib modules
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


const arrayData =[];

// return inquirer
const questions = async() => {
 const answers = await inquirer
   .prompt([
    {
      type: 'input',
      name: ' Name',
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

    {
        type: 'list',
        name: 'role',
        message: 'what is your role?',
        choices: ['Engineer','Intern', 'Manager'],
      }
       
   ])

   if(answers.role === 'Engineer'){
       console.log('Hey')

    }
return answers
}



// Checkbx Validation 

//    if (users Selects eningeer){
//    prompted to enter engineer’s name, ID, email, and GitHub username
//    }
  

//    else if (users Selects intern){
//     prompted to enter intern’s name, ID, email, and school
//    }

  

//  module.exports = prompt










   // .then(function(data){
//     console.log(`Heyy ${JSON.stringify(data)}`)

    
//     fs.writeFile('./dist/index.html', generateSite(data), err=>{
//       if(err){
//         console.log(err)
//       }else{
//         console.log(" Page created! Check out index.html in this directory to see it! ")
//       }
//     })
//   }


