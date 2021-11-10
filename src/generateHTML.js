const fs = require('fs');
var counter = 0
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


const generateHTML = (employeeArray) => {
    employeeArray.forEach(employee => {
        if (counter == 3) {
            htmlText += `<section class="columns">
                    <div class="column is-4 is-offset-1 card">
                        <header class="card-header has-background-info is-flex-direction-column">
                        <p class="card-header-title">${employee.getName()} </p>\n`
        }
        else {
            htmlText += `<div class="column card">
    <header class="card-header has-background-info is-flex-direction-column">\n
    <p class="card-header-title">${employee.getName()} </p>\n`
        }
        if (employee.getRole() === "Manager") {
            htmlText += `<p class="card-header-title">Manager</p>`
        } else if (employee.getRole() === "Engineer") {
            htmlText += `<p class="card-header-title">Engineer</p>`
        } else if (employee.getRole() === "Intern") {
            htmlText += `<p class="card-header-title">Intern</p>`
        }
        htmlText += `</header>
                        <div class="card-content">\n
            <div class="content">ID: ${employee.getId()}</div>
            <hr>\n
            <div class="content">Email:<a href = "mailto: ${employee.getEmail()}"> ${employee.getEmail()}</a></div>
            <hr>`
        if (employee.getRole() === "Manager") {
            htmlText += `<div class="content">Office Number: ${employee.getOfficeNumber()}</div>
                    </div></div>`
        } else if (employee.getRole() === "Engineer") {
            htmlText += `<div class="content">GitHub Username: <a href="https://github.com/${employee.getGitHub()}" target="_blank">${employee.getGitHub()}</a></div>
                    </div></div>`
        } else if (employee.getRole() === "Intern") {
            htmlText += `<div class="content">School: ${employee.getSchool()}</div>
                    </div></div>`
        }
        counter++
        if (counter == 3) {
            htmlText += `</section>`
        }
    });

    htmlText += `</main>
<script src="https://code.jquery.com/jquery-3.6.0.js"
    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
<script src="./assets/js/script.js"></script>
</body>`

    fs.writeFileSync('./dist/index.html', htmlText);

    console.log("Your team page is now ready, view it in the index.html found in the dist folder")

}

module.exports = {
    generateHTML,
};