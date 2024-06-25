# Assessment 03

## Table of Contents

- [Assessment 03](#assessment-03)
  - [Table of Contents](#table-of-contents)
  - [Project requirements](#project-requirements)
  - [Deliverables](#deliverables)
    - [How to make sure you have a valid npm package](#how-to-make-sure-you-have-a-valid-npm-package)
    - [What to include in the README](#what-to-include-in-the-readme)
  - [Rubric](#rubric)

Rather than working on a traditional assessment, you will be creating a project from scratch using Express, Nunjucks server side rendering, 1st and 3rd party APIs, and the DOM. The requirements, deliverables, grading rubric, and instructions on how to get started are below

## Project requirements

Your project must be an application with a Nunjucks front end and Express back end.

- The back end must expose an API for working with at least one collection of 3rd party data. (Requesting data from 3rd party API)
- The front end or Nunjucks must utilize these endpoints to render this data (Either render your front end via SSR or create DOM manipulation)
- At least one template using Nunjucks (Generally a footer or a navbar)
- Use the DOM to add reactivity to the site
- README appears professional and has clear information about the app
- Bonus: website is responsive (generally using flexbox)

## Deliverables

You must publish your code to a **public** repository on GitHub and share the URL to the repo when you turn in the assignment. The repo must be a valid npm package, with a README located in the project root. Continue reading for details.

### How to make sure you have a valid npm package

During Unit 3, you learned that packages are just directories that have a file named `package.json`. In addition to having a `package.json` and `package-lock.json` file in the project root, your package must be set up so it runs after installing dependencies (`npm install`) and executing the `dev` script (`npm run dev`).

### What to include in the README

A README file should be located in the project root so it appears when viewing the repo on GitHub ([click here to see an example](https://github.com/catppuccin/catppuccin#readme)). The README must include:

- The name of your project (ex.: “Personal Finance Calculator”, “Invoicer”, “Another Todo App”)
- A short, 1–3 sentence blurb that describes the app (ex.: “Another todo list app with features built around a Bullet Journal-inspired workflow.”)
- A section that lists and describes each feature of the app

It’s recommended that you name your file `README.md` so you can use [GitHub’s Markdown formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (GitHub supports other syntaxes besides Markdown like HTML, Asciidoc, and reStructuredText). You can create and edit this file in VS Code like you would any other source code file. You might find it helpful to use [VS Code’s Markdown preview](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) to make sure your README is formatted nicely.

## Rubric

|  | Excellent | Good | Needs improvement | Unsatisfactory |
| --- | --- | --- | --- | --- |
| Requirements and delivery (15 points) | Completed 100% of the requirements. Project is in the correct format and accessible on GitHub. Can install project and successfully run it without syntax errors or other fatal errors. (15-12) | Completed 80–90% of the requirements. Project is in the correct format and accessible on GitHub. Can install project and successfully run it without syntax errors or other fatal errors. (11-9) | Completed 70–80% of the requirements. Project is in the correct format and accessible on GitHub. Can install project and successfully run it after correcting a few trivial errors. (9-6) | Completed less than 70% of the requirements. Project is in the correct format and accessible on GitHub. Can install project and successfully run it after correcting a few trivial errors. (6-0) |
| API Requests  are logically structured (15 points) | API requests are logically structured and well designed. (15-12) | Few inappropriate structure choices (i.e. poor property names). (11-9) | Several inappropriate structure choices. (9-6) | Data mockup is insufficient or missing. (6-0) |
| DOM Manipulation (15 points) | Excellent use of Selectors to interact with the DOM. Event listeners are well used and interact with the Event object appropriately. App can move up and down the DOM tree (15-12) | Fair use of Selectors to interact with the DOM. Event listeners are decently used and interact with the Event object. App can move up and down the DOM tree (11-9) | Poor use of Selectors to interact with the DOM. Event listeners are poorly used. App can move up and down the DOM tree (9-6) | Poor or no use of Selectors, Event listeners, and does not travers the DOM tree (6-0) |
| Template inheritance. (10 points) | Complete implementation. (10-7) | Partial implementation. (7-5) | Attempted implementation. (5-3) | Not implemented. (3-0) |
| Design of back end logic (20 points) | Data returned from back end is well structured and logically relate to the endpoints. Excellent use of GET, POST, route parameters, request parameters. (20-17) | Data returned logically relate to the endpoints. Provides complete set of API endpoints but has few inappropriate design choices (i.e. weak separation of concerns, inappropriate use of route parameters/request parameters). (17-12) | Several inappropriate design choices (i.e. inappropriate use of GET, POST, route parameters, request parameters). Data returned is disorganized. The relationship between endpoints and what they return is unclear. (12-8) | App is poorly written or incorrect. (8-0) |
| Design of front end logic (20 points) | App is reactive to user inputs. Media, assets, and icons are well organized in public folder. Excellent use of DOM Selectors and Event Listeners.  (20-17) | App is somewhat reactive to user inputs. Media, assets, and icons are organized in public folder. Good use of DOM Selectors and Event Listeners.  (17-12) | App has poor/inconsistent reactivity to user inputs. Media, assets, and icons are poorly organized in public folder. Poor  use of DOM Selectors and Event Listeners.  (12-8) | App is poorly written or incorrect. (8-0) |
| Documentation (5 points) | Features are thoroughly documented in the project’s README. (5-4) | Features are mostly documented in the project’s README. (3-2) | Missing documentation for most features. (2-1) | README is missing (0) |
