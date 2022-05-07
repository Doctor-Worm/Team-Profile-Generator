// genereates the cards with employee information
const generateTeam = () => {
    return `
    <div class="card shadow p-0 m-3 border-dark col-3">
        <div class="card-header">${position}</div>
        <div class="card-body">
            <h5 class="cart-title">James Madison</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 1</li>
            <li class="list-group-item">Email: skylove@hotmale.com</li>
            <li class="list-group-item">GitHub: Doctor-Worm</li>
        </ul>
    </div>
    `;
};

// generates the webpage
const generateWebpage = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <header>
        <h1>My Team</h1>
    </header>

    <body>
        <div class="row justify-content-around py-4">
            ${generateTeam()}


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};