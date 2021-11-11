// All requires for the code
const inquirer = require('inquirer')
const generate = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Array that will be given to generateHtml
const employeeArray = [];

// First inquirer prompt to begin the process of asking questions.
promptManager()

// Manager inquirer code, uses inquirer to ask questions then use the Manager class to create a new Manager and push manager
// into the employeeArray
function promptManager() {
  return inquirer.prompt([
    {
        type: "input",
        name: "ManagerName",
        message: "What is the Manager's name?"
    },
    {
        type: "input",
        name: "ManagerID",
        message: "What is the Manager's employee ID?"
    },
    {
        type: "input",
        name: "ManagerEmail",
        message: "What is the Manager's email address?"
    },
    {
        type: "input",
        name: "ManagerOffice",
        message: "What is the Manager's office number?"
    },
  ])
 
  .then((answers) => {
    const manager = new Manager(answers.ManagerName, answers.ManagerID, answers.ManagerEmail, answers.ManagerOffice);
    employeeArray.push(manager)
    console.log("Welcome Manager")
    promptContinue();

  })
};

// Engineer inquirer code, uses inquirer to ask questions then use the Engineer class to create a new Engineer and add it
// into the employeeArray
function promptEngineer(){
  return inquirer.prompt([
{
      type: "input",
      name: "EngineerName",
      message: "What is the Engineer's name?"
    },
    {
      type: "input",
      name: "EngineerID",
      message: "What is the Engineer's employee ID?"
    },
    {
      type: "input",
      name: "EngineerEmail",
      message: "What is the Engineer's email address?"
    },
    {
      type: "input",
      name: "EngineerGit",
      message: "What is the Engineer's github username?"
    },
  ])
  .then((answers) => {
    const engineer = new Engineer(answers.EngineerName, answers.EngineerID, answers.EngineerEmail, answers.EngineerGit);
    employeeArray.push(engineer);
    console.log("Welcome Engineer");
    promptContinue();
  })
};


// Intern inquirer code, uses inquirer to ask questions then use the Intern class to create a new Intern and add it
// into the employeeArray
function promptIntern(){
  return inquirer.prompt([
{
  type: "input",
  name: "InternName",
  message: "What is the Intern's name?"
},
{
  type: "input",
  name: "InternID",
  message: "What is the Intern's employee ID?"
},
{
  type: "input",
  name: "InternEmail",
  message: "What is the Intern's email address?"
},
{
  type: "input",
  name: "InternSchool",
  message: "What is the Intern's school?"
},
])
.then((answers) => {
  const intern = new Intern(answers.InternName, answers.InternID, answers.InternEmail, answers.InternSchool);
  employeeArray.push(intern);
  console.log("Welcome Intern");
  promptContinue();
})
};

// This is the inquirer code that prompts the user to add another team member or to finish it and create the html.
function promptContinue(){
  return inquirer.prompt([
  {
    type: "list",
    name: "Job", 
    choices: ["Engineer", "Intern", "Finish building my team"]
  },
])
.then((answers) => {
  if(answers.Job === "Engineer"){
    promptEngineer();
  } else if (answers.Job === "Intern"){
    promptIntern();
  } else {
    generate.generateHTML(employeeArray);
    console.log("Your team is being built!")
  }
})
};