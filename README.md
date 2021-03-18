# Amiculum Digital Assessment


## Description

Here's the working file for Amiculum Digital Assessment.

Listed below are the technologies used in developing the project.

## Technologies used

JavaScript / Automation
Used Webpack to compile and minify project assets and node js for importing plugins.

- [Webpack](https://webpack.js.org/) with ES6/2015 support through [Babel](https://babeljs.io/)
- [Node](https://nodejs.org/)

Styles
Used Sass for processing css
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup
Used PUG as a template engine that simplify syntax to create markup faster.
- [PUG](https://pugjs.org/)

Optimization
Used for optimizing image sizes
- [Imagemin](https://github.com/imagemin/imagemin)

Server
Used for local testing and troubleshooting
- [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)
- [BrowserSync](http://www.browsersync.io/)

Code Management
Uploaded to a Git Repo
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


## Automated tasks

This project uses [WEBPACK](https://webpack.js.org/) to run automated tasks for development and production builds.
The tasks are as follows:

`npm run build`: Compiles preprocessors copy production ready code to dist folder
`npm run dev`: Compiles preprocessors and boots up development server
