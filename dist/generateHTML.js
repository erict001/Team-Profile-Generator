const generateHTML = team => {

    //create Manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card m-5">
        <div class="card-header text-center">
            <h2 class="card-title">${Manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${Manager.getNumber()}</li>
            </ul>
        </div>
        </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card employee-card m-5">
        <div class="card-header text-center">
            <h2 class="card-title">${Intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${Intern.getSchool()}</li>
            </ul>
        </div>
        </div>`;
    };

    const generateEngineer = intern => {
        return `
        <div class="card employee-card m-5">
        <div class="card-header text-center">
            <h2 class="card-title">${Intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${Intern.getSchool()}</li>
            </ul>
        </div>
        </div>
        `;
    };


}
generateHTML()

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./util/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-between">
            <div class="team-area col-12 d-flex flex-wrap justify-content-center">
                ${team}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}