let projectContainer = document.getElementById('projectContainer')

let projects = [
    {
        src: './assets/my-work/fmarket.svg',
        name: 'fMarket',
        tech: [`Handlebars`, `MySQL`, `Sequelize`, `Node`, `Express.js`,
            `User Authentication(express-sessions/cookies)`],
        school: 'Carleton Coding Bootcamp',
        buttons: ['Code', 'Deployed'],
        links: ['https://github.com/askarrizvi/fmarket', 'https://vast-fjord-71803.herokuapp.com/']
    },
    {
        src: './assets/my-work/furfoodz.svg',
        name: 'furfoodz',
        tech: ['Handlebars', 'MySQL', 'Sequelize', 'Node', 'Express.js', 'User Authentication (express-sessions/cookies)'],
        school: 'Carleton Coding Bootcamp',
        buttons: ['Code', 'Deployed'],
        links: ['https://github.com/jackloveday-git/FurFoodz', 'https://furfoodz.herokuapp.com/']
    },
    {
        src: './assets/my-work/spacecamp.svg',
        name: 'Spacecamp',
        tech: ['HTML', 'Pure.css', 'Javascript', 'jQuery', 'Various Public APIs'],
        school: 'Carleton Coding Bootcamp',
        buttons: ['Code', 'Deployed'],
        links: ['https://github.com/jackloveday-git/space-camp', 'https://jackloveday-git.github.io/space-camp/']
    },
    {
        src: './assets/my-work/nosql-database.svg',
        name: 'Tech Blog',
        tech: ['Handlebars', 'MySQL', 'Sequelize', 'Express.js', 'bcrypt', 'express-session'],
        school: 'Carleton Coding Bootcamp',
        buttons: ['Code', 'Deployed'],
        links: ['https://github.com/Cdjrick/Charlie-Rick-Tech-Blog', 'https://charlie-rick-tech-blog.herokuapp.com/']
    },
    {
        src: './assets/my-work/nosql-database.svg',
        name: 'Social Network Api',
        tech: ['MongoDB', 'Mongoose', 'Express.js'],
        school: 'Carleton Coding Bootcamp',
        buttons: ['Code', 'Video'],
        links: ['https://github.com/Cdjrick/Charlie-Rick-NoSql-Database', 'https://watch.screencastify.com/v/oE2rKsRiymDRAwWd0Mju']
    },
    {
        src: './assets/my-work/budgeter.svg',
        name: 'Budgeter',
        tech: ['MongoDB', 'Mongoose', 'IndexedDB'],
        school: 'Carleton Coding Bootcamp',
        buttons: ['Code', 'Deployed'],
        links: ['https://github.com/Cdjrick/Charlie-Rick-Budgeter', 'https://charlierickbudgeter.herokuapp.com/']
    },
    {
        src: './assets/my-work/employee-tracker.svg',
        name: 'Employee Tracker',
        tech: ['SQL'],
        school: 'Carleton Coding Bootcamp',
        buttons: ['Code', 'Video'],
        links: ['https://github.com/Cdjrick/Charlie-Rick-Employee-Tracker', 'https://drive.google.com/file/d/10tJ7vmrmLZ-imZpm2wx7IY2uafxmSqkd/view']
    },
    {
        src: './assets/my-work/password-generator.svg',
        name: 'Password Generator',
        tech: ['Javascript', 'HTML', 'CSS'],
        school: 'Carleton Coding Bootcamp',
        buttons: ['Code', 'Deployed'],
        links: ['https://github.com/Cdjrick/Charlie-Rick-Password-Generator', 'https://cdjrick.github.io/Charlie-Rick-Password-Generator/']
    }
]

projects.forEach(project => {
    let div = document.createElement('div')
    div.setAttribute('class', 'col-12 col-lg-6 mb-5')
    // let p = document.createElement('p')
    // project.forEach(tech => {
    //     p.innerHTML =  tech.tech
    // })
    div.innerHTML = `
            <div class='card col-12 col-lg-6 mx-auto mt-4'>
                <img src=${project.src} class="card-img-top" alt="${project.name}">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text tech">${project.tech.join(' - ')}</p>
                    <div class='row pb-2'>
                        <p class="card-text col-auto mx-auto mt-2">${project.school}</p>
                    </div>
                    <div class='row buttons'>
                        <a href="${project.links[0]}" target="_blank" class="btn btn-primary col-4 mx-auto">${project.buttons[0]}</a>
                        <a href="${project.links[1]}" target="_blank" class="btn btn-primary col-4 mx-auto">${project.buttons[1]}</a>
                    </div>
                </div>
            </div>
    `

    projectContainer.appendChild(div)
})

