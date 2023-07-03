# Bloom & Barter: Plant Swap Concept
## 15th Challenge: Project 2 - Interactive Full-Stack Application
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 

## Description
- This is an online community site for plant lovers. The users can connect with other plant enthusiasts, trade plants, and share information. The site have an ads, displaying existing plant listings and users should be able to log in, view detailed listings, leave comments, and create their own listings.

## Table of Contents
- [Bloom \& Barter: Plant Swap Concept](#bloom--barter-plant-swap-concept)
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

## User Story

```md
AS a plant lover,
I WANT an online community site, 
SO THAT I can connect and trade with others in my community.
```
  
## Acceptance Criteria

```md
GIVEN a blog style site
WHEN I visit the site for the first time 
THEN I am presented with the homepage, which includes existing 'plant listing' posts that have been posted; and the option to log in
WHEN I view the homepage listings i can easily see the post name, description, and the category of the listing; SWAP, WANTED or FREE
WHEN I click on an existing plant listing
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment and connect with the trader
WHEN I click on any other links in the navigation
THEN I am prompted to sign in; if i do not have a user name im prompted to sign up
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I am taken to my profile and presented with any 'plant listings' I have already created and the option to add a new listing
WHEN I fill out the form to add a new listing
THEN I am prompted to enter both a title, type and description for my listing
WHEN I fill out the form to create a new listing
THEN the title,type and contents of my post are saved and I am taken back to an updated profile page with my new listing
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on any existing listing I can enter a comment to connect with the owner of the listing
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view listings and comments but I am prompted to log in again before I can add, update, or delete listings
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
```

## Technologies Used
* HTML
* Tailwind CSS
* Javascript
* Node.js
* MySQL
* Dotenv
* Sequelize
* Express
* Handlebars
* Passport npm - chosen library that haven't discussed in the class

## Installation
- Navigate to this repository.
- Open your terminal on your local machine to fork or copy the repository.
- To install the package dependencies, run the following command in the terminal.
  ```md
  npm i 
  ```
- Create an .env file to insure the root directory of the application. Once done, fill up the following information needed for security purposes:
  ```md
  DB_NAME='your custom database name'
  DB_PASSWORD='your MySQL password'
  DB_USER='your MYSQL username''
  ```
-  Run the command to open the mysql shell:
  ```md
  mysql -u root -p
  ```
- Enter your secured password as the terminal will prompt this question.
- Then run this command to create and present the database:
  ```md
  source schema.sql;
  ```
- To create the tables and its relationships to the application, run this step:
  ```md
  npm run seed
  ```
- Open the server file to run this command from the application root directory
  ```md 
  npm run start
  ```

## Usage and Screenshots
- to edit
  
## Links
- Github Repository: - https://github.com/jnaoroji/Bloom_and_Barter
- Heroku Deployment: - https://bloom-and-barter-3911749eadd3.herokuapp.com

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
- [Passport](https://www.npmjs.com/package/passport)

## Authors
- © 2023 
- [Jenny](https://github.com/jnaoroji) - Backend application
- [Kristine](https://github.com/mcramileux) - Backend application
- [Natasa](https://github.com/Natasa00) - Frontend application