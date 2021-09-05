// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',        
        message: "What is the title of your project?"
     },  
     {
         type: 'input',
         name: 'description',        
         message:  "Provide a description of your project.", 
      },
      {
         type: 'input',
         name: 'usage',        
         message:  "What are the instructions for using your project?", 
      },
      {
        type: 'list',
        name: 'license',        
        message: "Please choose the license used, if applicable.",
        choices: ["MIT", "GNU", "GPL", "Other", "None"],
     },
      {
         type: 'input',
         name: 'test',        
         message: "What are the test instructions?",
      },
      {
         type: 'input',
         name: 'github',        
         message: "What is your GitHub username?",
      },
      {
         type: 'input',
         name: 'email',        
         message: "What is your email?",
      },
    ];
 

// TODO: Create a function to write README file
const writeToFile = (answers) =>
  `# ${answers.title} 
  # Description 
  ${answers.description} 
  # Table of Contents
  * [Usage](#usage)  
  * [License](#license)
  * [Test Instructions](#test)
  * [Questions](#questions)
  
  # Usage
  * ${answers.usage} 
  # License
  * ${answers.license} 
  # Test Instructions
  * ${answers.test} 
  # Questions
  * [Github Link](https://github.com/${answers.github})
  * For additional questions, please contact me via email at ${answers.email}
 `;

// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions)
    .then((answers) => {
       fs.writeFile('README.md', writeToFile(answers), (err) => err?
       console.log(err) : console.log("README.md has been created."));

    })

}

// Function call to initialize app
init();
