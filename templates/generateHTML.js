module.exports = function generateHTML(
  managerArr,
  engineerArr,
  internArr,
  developerArr,
  apprenticeArr
) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<link rel="stylesheet" href="style.css">
    <title>Engineering Team</title>
    <style>
    body {
        background-image: url(https://unsplash.com/photos/1RT4txDDAbM);
        background-size: cover;
            background-attachment: scroll;
        }
        .employee {
            position: relative;
            margin-right: 20px;
            margin-left: 15px;
            margin-bottom: 10px;
            float: left;
            width: 270px;
        }
        .name {
            padding: 13px;
            font-size: 40px;
            color: black;
            float: left;
        }
        .position {
            position: relative;
            padding-bottom: 8px;
            font-size: 35px;
            color:black;
            float: left;
        }
        .employeeInfo {
            position: relative;
            padding-bottom: 8px;
            font-size: 35px;
            color: black;
            float: left;
        }
        </style>
</head>
<body>
<div class="jumbotron bg-light text-info jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Dream Team</h1>
  </div>
</div>
<div class="container">
    <div class="row">
        <div class="col">
            ${managerArr
              .map(employee =>
                `
            <div class="card text-white bg-info mb-3" class="employee" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-name">${employee.name}</h5>
                <h6 id="position" class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="id text">ID: ${employee.id}</p>
                    <p class="email text">Email: <br>${employee.email}</p>
                    <p class="relevantInfo text">Office Number: ${employee.officeNum}</a></p>
              </div>
            </div>
    </div>
    <div class="col">
        `.trim()
              )
              .join("")}
        ${engineerArr
          .map(employee =>
            `
        <div class="card text-white bg-info mb-3" class="employee" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-name">${employee.name}</h5>
            <h6 id="position" class="card-subtitle mb-2 text-muted">Engineer</h6>
            <p class="id text">ID: ${employee.id}</p>
                <p class="email text">Email: <br>${employee.email}</p>
                <p class="relevantInfo text">Github: <a href="https://github.com/${employee.github}"> ${employee.github}</a></p>
          </div>
        </div>
    </div>
    <div class="col">
        `.trim()
          )
          .join("")}
        ${developerArr
          .map(employee =>
            `
        <div class="card text-white bg-info mb-3" class="employee" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-name">${employee.name}</h5>
            <h6 id="position" class="card-subtitle mb-2 text-muted">Developer</h6>
            <p class="id text">ID: ${employee.id}</p>
                <p class="email text">Email: <br>${employee.email}</p>
                <p class="relevantInfo text">Github: <a href="https://github.com/${employee.github}"> ${employee.github}</a></p>
          </div>
        </div>
    </div>
    <div class="col">
        `.trim()
          )
          .join("")}
            ${internArr
              .map(employee =>
                `
        <div class="card text-white bg-info mb-3" class="employee" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-name">${employee.name}</h5>
            <h6 id="position" class="card-subtitle mb-2 text-muted">Intern</h6>
            <p class="id text">ID: ${employee.id}</p>
                <p class="email text">Email: <br>${employee.email}</p>
                <p class="relevantInfo text">School: ${employee.school}</a></p>
          </div>
        </div>
    </div>
    <div class="col">
       `.trim()
              )
              .join("")}
        ${apprenticeArr
          .map(employee =>
            `
    <div class="card text-white bg-info mb-3" class="employee" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-name">${employee.name}</h5>
        <h6 id="position" class="card-subtitle mb-2 text-muted">Apprentice</h6>
        <p class="id text">ID: ${employee.id}</p>
            <p class="email text">Email: <br>${employee.email}</p>
            <p class="relevantInfo text">School: ${employee.school}</a></p>
      </div>
    </div>
        `.trim()
          )
          .join("")}
    </div>
    </div>
</div>
</body>
</html>
  `;
};
