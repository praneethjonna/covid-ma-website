/*
Application bootstrap file
*/

// dependencies
import express from "express";
import path from "path";
import { CovidController } from "./api/covid.controller";
import { ErrorHandler } from "./utils/error.handler";

// Configure express
const app = express();
const port = 8080; // default port to listen

//
// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.render("pages/index");
});
app.get("/content/{0}", (req, res) => {
    // render the index template
    res.render("pages/content");
});
app.get("/error", (req, res) => {
    // render the index template
    res.render("pages/error");
});

app.get("/api/covid", (req, res, next) => {

    const covidController = new CovidController();
    covidController.getMACases().then((response) => {
        res.json(response);
    });

});



// 404 handler
app.use(new ErrorHandler().notFound);

// error handler middleware
app.use(new ErrorHandler().unhandledExceptions);

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});



