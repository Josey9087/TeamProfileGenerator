// FS require to write to another document as well as a counter used.
const fs = require('fs');
var counter = 0
// This is the html text that will be written into the html file
var htmlText = `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title class="title is-1">Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./assets/style/style.css">

</head>

<body>
    <main>
        <header class="p-6 has-background-danger has-text-centered">
            <h class="title is-1 ">My Team</h1>
        </header>
        <section class="section">
            <div class="container">
                <section class="columns">`

// The constant variable that will create the cards as it reads the employeeArray.
const generateHTML = (employeeArray) => {
    // for each item in employeeArray it is given the name employee during the loop.
    employeeArray.forEach(employee => {
        // if on the 3rd card the loops adds a different text to html for styling
        if (counter == 3) {
            htmlText += `<section class="columns">
                    <div class="column is-4 is-offset-1 card">
                        <header class="card-header has-background-info is-flex-direction-column">
                        <p class="card-header-title">${employee.getName()} </p>\n`
        }
        else if (counter>3){
            htmlText+= `<div class="column is-4 is-offset-1 card">
                        <header class="card-header has-background-info is-flex-direction-column">
                        <p class="card-header-title">${employee.getName()} </p>\n`
        }
        // the loops adds this text and uses the employee.getName to get the name from the user input.
        else {
            htmlText += `<div class="column card">
    <header class="card-header has-background-info is-flex-direction-column">\n
    <p class="card-header-title">${employee.getName()} </p>\n`
        }
        // The role is grabbed and depending on the role the text is written into the html
        if (employee.getRole() === "Manager") {
            htmlText += `<p class="card-header-title">Manager</p>`
        } else if (employee.getRole() === "Engineer") {
            htmlText += `<p class="card-header-title">Engineer</p>`
        } else if (employee.getRole() === "Intern") {
            htmlText += `<p class="card-header-title">Intern</p>`
        }
        // The id and email is grabbed from the employee being looped through the email is linked to send an email through the defualt method to that email address
        htmlText += `</header>
                        <div class="card-content">\n
            <div class="content">ID: ${employee.getId()}</div>
            <hr>\n
            <div class="content">Email:<a href = "mailto: ${employee.getEmail()}"> ${employee.getEmail()}</a></div>
            <hr>`
            // If the role is Manager then it grabs the office number
        if (employee.getRole() === "Manager") {
            htmlText += `<div class="content">Office Number: ${employee.getOfficeNumber()}</div>
                    </div></div>`
            // If the role is Engineer then it grabs the github username and links it to the github, clicking on it opens a new tab
        } else if (employee.getRole() === "Engineer") {
            htmlText += `<div class="content">GitHub Username: <a href="https://github.com/${employee.getGitHub()}" target="_blank">${employee.getGitHub()}</a></div>
                    </div></div>`
            // If the role is Intern then it grabs the name of the school
        } else if (employee.getRole() === "Intern") {
            htmlText += `<div class="content">School: ${employee.getSchool()}</div>
                    </div></div>`
        }
        // the counter is raised to find how many times it been looped through.
        counter++
        // If the loop is on its 3rd time, it adds text to the html
        if (counter == 3) {
            htmlText += `</section>`
        }
    });
    // the ending text of the html to close and complete the page.
    htmlText += `</main>
<script src="https://code.jquery.com/jquery-3.6.0.js"
    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
<script src="./assets/js/script.js"></script>
</body>`

    // The file is written to a pathway
    fs.writeFileSync('./dist/index.html', htmlText);

    console.log("Your team page is now ready, view it in the index.html found in the dist folder")

}

module.exports = {
    generateHTML,
};