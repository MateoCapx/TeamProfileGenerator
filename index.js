const inquirer = require('inquirer');  // In place to be able to use the inquirer package from NPM
// const generateSite = require('../TeamProfileGenerator/lib/Employee'); // Grabbing this file and using it with this application
const fs = require("fs");
const generatePage = require('./src/generatePage');
const { ValidationError } = require('jest-validate');


return inquirer
  .prompt([
    {
      type: 'input',
      name: ' Manager Name',
      message: 'Enter Name of Team Manager (Required)',
      validate: managerName => {
        if (managerName) {
          return true;
        } else {
          console.log('You need to enter a Team member name!');
          return false;
        }
      }
    },


    {
      type: 'input',
      name: 'Employee Id',
      message: 'Enter Employee ID (Required)',
      validate: employeeInput => {
        if (employeeInput) {
          return true;
        } else {
          console.log('You need to enter an Employee ID!');
          return false;
        }
      }
    },

  
    {
      type: 'input',
      name: 'Email Address',
      message: 'Enter Email Address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter a vaild Email address!');
          return false;
        }
      }
    },


    {
      type: 'input',
      name: 'Office Number',
      message: 'Enter Office number!',
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log('You need to enter a vaild office number!');
          return false;
        }
      }
    },

    {
        type: 'checkbox',
        name: 'Add an engineer or intern or finish building my team',
        message: 'Add an engineer or intern or finish building my team (Check all that apply) (Required)',
        choices: ['Engineer','Intern', 'Finish Building My Team '],
        validate: finishBuildingMyTeam => {
            if (finishBuildingMyTeam) {
              return prompt();
            } else {
              console.log('You need to enter a vaild office number!');
              return false;
            }
          }
      },
       
   ])


// Checkbx Validation 

//    if (users Selects eningeer){
//    prompted to enter engineer’s name, ID, email, and GitHub username
//    }
  

//    else if (users Selects intern){
//     prompted to enter intern’s name, ID, email, and school
//    }

  

 module.exports = prompt









 
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


