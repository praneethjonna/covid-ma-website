# Mass.gov Covid Guide
This website is build for Massachusetts residents to provide quick access to all important guides during the Covid-19 Pandemic.
This app acts a possible starting point to extend this website.

ES6 syntax is used throughout the codebase including string template literals, arrow functions, let/const.
The remainder of this README will provide details on how things are structured within the codebase. What's not documented in this file should (hopefully) documented in the source code.

## Prerequisites

1. [Node 12 or greater](https://nodejs.org/en/download/)

## Configuration

### Setup local DNS
1. Open host file - C:\Windows\System32\drivers\etc\hosts
2. Add this line at the end - 127.0.0.1   covid19.mass.gov  

### Update GA Tracker
1. Update the GA Tracker code in this file `src\views\partials\scripts.ejs`
2. Search for UA-XXXXXXXX-X and replace it with your GA ID  

## Run locally

- Run to start the web app
  ```bash
  npm run start
  ```
  To watch changes, live reload and linting
  ```bash
  npm run dev
  ```

## installation

- `npm install` on the root folder
