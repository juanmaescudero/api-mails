const errorMiddleware = (status: number, message: string, res) => {
    const statusCode = status || 500
    const errorMessage = message || 'Internal Server Error'

    res.status(statusCode).json({ message: errorMessage })
}

export { errorMiddleware }
