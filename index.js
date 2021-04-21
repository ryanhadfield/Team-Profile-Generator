const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const managerCard = require("./src/manager")
const engineerCard = require("./src/engineer")
const internCard = require("./src/intern")

const employeeDB = []
// User questions for Manager
const managerInfo = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "Name",
      message: "What is the name of your team manager?",
    },
    {
      type: "input",
      name: "Id",
      message: "Please enter a ID number for this team member: ",
    },
    {
      type: "input",
      name: "Email",
      message: "Please enter the email address for this team member: ",
    },
    {
      type: "input",
      name: "Office",
      message: "Please enter the office number for the team manager: ",
    },
  ]).then(managerData => {
    const manager = new Manager(managerData.Name, managerData.Id, managerData.Email, managerData.Office)
    employeeDB.push(manager)
    memberInfo()
  })
}
// Adding another team member
const memberInfo = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "Role",
      message: "Please add a team member:",
      choices: ["Engineer", "Intern"],
    },

  ])
    .then(answer => {

      if (answer.Role === 'Engineer') {
        engineerInfo();
      } else if
        (answer.Role === 'Intern') {
        internInfo();
      }
      else {
        console.log('Done!');
        return;
      }
    })
}

managerInfo();

// User questions about Engineer
const engineerInfo = () => {
  inquirer.prompt([

    {
      type: 'input',
      message: 'What is the Engineers name?',
      name: 'Name'
    },
    {
      type: 'input',
      message: 'What is the Engineers employee id?',
      name: 'Id',
    },
    {
      type: 'input',
      message: 'What is the Engineers email?',
      name: 'Email',
    },
    {
      type: 'input',
      message: 'What is the Engineers Github username?',
      name: 'Github',
    },
    {
      type: 'confirm',
      message: 'Do you need to enter another employee?',
      name: 'Add',
    },

  ]).then(engineerData => {
    const engineer = new Engineer(engineerData.Name, engineerData.Id, engineerData.Email, engineerData.Github)
    employeeDB.push(engineer)
    console.log(engineerData.Add)
    if (engineerData.Add) {
      memberInfo()
    }
    else {
      generateTeamProfile()
    }
  })
}


// User questions about Intern
const internInfo = () => {
  inquirer.prompt([

    {
      type: 'input',
      message: 'What is the Interns name?',
      name: 'Name'
    },
    {
      type: 'input',
      message: 'What is the Interns employee id?',
      name: 'Id',
    },
    {
      type: 'input',
      message: 'What is the Interns email?',
      name: 'Email',
    },
    {
      type: 'input',
      message: 'What is the Interns school?',
      name: 'School',
    },
    {
      type: 'confirm',
      message: 'Do you need to enter another employee?',
      name: 'Add',
    },

  ]).then(internData => {
    const intern = new Intern(internData.Name, internData.Id, internData.Email, internData.School)
    employeeDB.push(intern)
    if (internData.Add) {
      memberInfo()
    }
    else {
      generateTeamProfile()
    }
  })
}



// HTML Layout
const generateHTML = (card) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Initech Engineering Team Page</title>
  
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
      <!-- Font Awesome -->
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
  
      <style>
          body,
          html {
              height: 100%;
              margin: 0;
          }
  
          .hero-image {
              background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url("./public/officespace.jpg");
              height: 25%;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              position: relative;
          }
  
          .hero-text {
              text-align: center;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
          }
  
          .span {
              font-size: 75px;
              color: #15C8CF;
              font-weight: bold;
              font-family: Arial, Helvetica, sans-serif;
              font-style: italic;
          }
      </style>
  </head>
  
  <body>
      <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: rgb(204, 196, 197);">
          <a class="navbar-brand" href="#"><img src="./public/initechlogoOnly.png" alt="initech logo"
                  class="rounded mx-auto d-block" width="200"></a>
          <div class="span">INITECH</div>
          <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li class="nav-item active">
                      <a class="nav-link" href="#">Web Engineering <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">TPS Reports</a>
                  </li>
              </ul>
          </div>
      </nav>
      <div class="hero-image">
          <div class="hero-text">
              <h1>Web Engineering Team</h1>
          </div>
      </div>
      <div class="main">
          <div class="container p-5">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center card-deck">
                      ${card}
                  </div>
              </div>
          </div>
  
          <!-- jQuery first, then Popper.js, then Bootstrap JS -->
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
              integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
              crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
              integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
              crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
              integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
              crossorigin="anonymous"></script>
  </body>
  
  </html>`
}

function generateTeamProfile() {
  let card = ""
  for (let i = 0; i < employeeDB.length; i++) {

    if (employeeDB[i].getRole() === "Manager") {
      card = card + managerCard(employeeDB[i])
    }
    else if (employeeDB[i].getRole() === "Engineer") {
      card = card + engineerCard(employeeDB[i])
    }
    else {
      card = card + internCard(employeeDB[i])
    }
  }

  fs.writeFileSync("Sample_team.html", generateHTML(card))
}

