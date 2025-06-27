import exceptionHandler from './exceptions/ExceptionHandler.js'

const ErrorHandler = (app) => {
    app.use(exceptionHandler)
}

export default ErrorHandler