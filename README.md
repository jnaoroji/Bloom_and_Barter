# ---TITLE OF THE GROUP PROJECT HERE---
## 15th Challenge: Project 2 - Interactive Full-Stack Application
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 

## Description
- to edit

## Table of Contents
- [---TITLE OF THE GROUP PROJECT HERE---](#---title-of-the-group-project-here---)
  - [15th Challenge: Project 2 - Interactive Full-Stack Application](#15th-challenge-project-2---interactive-full-stack-application)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage and Screenshots](#usage-and-screenshots)
  - [Links](#links)
  - [Contributions](#contributions)
  - [License](#license)
  - [Questions](#questions)
  - [References](#references)
  - [Authors](#authors)
- [Module 14 Mini-Project: Crowdfunding App](#module-14-mini-project-crowdfunding-app)
  - [User Stories](#user-stories)
    - [Acceptance Criteria](#acceptance-criteria-1)
  - [Specifications](#specifications)
  - [💡 Hints](#-hints)
  - [🏆 Bonus](#-bonus)

## User Story
- to edit
  
## Acceptance Criteria
- to edit
  
## Technologies Used
* HTML
* CSS
* Javascript
* Node.js
* MySQL
* Insomnia
* Dotenv
* ----add more

## Installation
- to edit

## Usage and Screenshots
- to edit
  
## Links
- Github Repository: - to edit
- Heroku Deployment: - to edit

## Contributions
- Contributions to this project won't be accepted as this is the reflection of the author's work hence the following questions and answers. Furthermore, forking or creating a pull request is acceptable.
  
## License
- This project is under [MIT](https://choosealicense.com/licenses/mit/) license.

## Questions
- For more questions or inquiries, please contact the authors at Github.

## References
- [Node.js](https://nodejs.org/en) 
- [MySQL](https://www.mysql.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- ----add more here

## Authors
- © 2023 [Jenny](https://github.com/jnaoroji), [Kristine](https://github.com/mcramileux), and Natasa (https://github.com/Natasa00)

--------






# Module 14 Mini-Project: Crowdfunding App

In this mini-project, you will work with a group to build a full-stack crowdfunding app using Node.js, Express.js, Sequelize, Handlebars.js, and MVC architecture.

## User Stories

* As a user, I want to see a list of current projects seeking funding.

* As a user, I want to be able to create an account.

* As a registered user, I want to post my own projects to ask for funding.

### Acceptance Criteria

* It's done when the `/` homepage route renders a list of all projects from the database.

* It's done when the `/project/:id` route renders an individual project's details based on the route parameter id.

* It's done when the `/login` route renders a form to log in and a form to create a new account.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/profile` route renders the logged-in user's projects and a form to create a new project.

* It's done when only a logged in user can visit the `/profile` route.

* It's done when a logged in user is redirected to `/profile` when they try to visit `/login` again.

* It's done when a user on the profile page can use the form to create a new project in the database.

* It's done when a user on the profile page can select a "Delete" button to remove their project from the database.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the session for a logged-in user expires after a set time.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

## Specifications 

* The database models have the following fields and associations:

  * `User`

    * `id`: primary key

    * `name`

    * `email`

    * `password`

  * `Project`

    * `id`: primary key

    * `name`

    * `description`

    * `date_created`

    * `needed_funding`

    * `user_id`: foreign key that references `User.id`

  * Users have many projects, and projects belong to a user.

    * If a user is deleted, all associated projects are also deleted.

---

## 💡 Hints

* What tools can you use to test the existing API routes if you don't yet have a front end?

* Where would you place the client-side JavaScript for capturing form data?

* How can middleware help protect routes from non logged-in users?

* How can Handlebars.js helpers (both built-in and custom) be used to render the desired results?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Add an `/edit/:id` route for logged in users to update their projects' details. Then deploy the app to Heroku!

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
