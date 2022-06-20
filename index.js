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
      message: 'Enter Team Manager Name (Required)',
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
        message: 'Who Would you like on Your Team?',
        choices: ['Engineer','Intern', 'Finish Building My Team'],
      }
       
   ])




// Addition questions for Engineer  
   if(answers.role === 'Engineer'){
    const engineerQuestions = await inquirer
   .prompt([
        {
          type: 'input',
          name: ' Name',
          message: 'Enter Engineer Name (Required)',
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
            message: 'Enter Engineer Employee ID (Required)',
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
            message: 'Enter Engineer Email Address (Required)',
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
        name: 'gitHubUsername',
        message: 'Enter Engineer GitHub Username',
        validate: gitHubUsername => {
          const pass = gitHubUsername.match('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); //) //<-- Validate a number
          if (pass) {
              return true;
            }
            return "Please enter a valid office number";
        }
        
      },

      
    ])
   arrayData.push(engineerQuestions),
      console.log(arrayData)
    
    }





    // Addition questions for intern
    
     if(answers.role === 'Intern'){
    const internQuestions = await inquirer
   .prompt([
        {
          type: 'input',
          name: ' Name',
          message: 'Enter Intern Name (Required)',
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
            message: 'Enter Intern Employee ID (Required)',
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
            message: 'Enter Intern Email Address (Required)',
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
        name: 'internSchool',
        message: 'Enter Intern School', 
      },

      
    ])
   arrayData.push(internQuestions),
      console.log(arrayData)
    
    }

    }
    



questions();


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


