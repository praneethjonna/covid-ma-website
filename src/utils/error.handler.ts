/*
Application error handler class
*/
export class ErrorHandler {

    // handles 404 failures
    notFound (req: any, res: any, next: any) {
        res.render("pages/error");
    };

    // handles are other generic errors
    unhandledExceptions(error: any, req: any, res: any, next: any){
        res.render("pages/error");
    }
}