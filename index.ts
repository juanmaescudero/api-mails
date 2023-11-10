import express from "express"
import cors from "cors"
import { router } from "./src/routes/mails.routes"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.use((err: any, req: any, res: any, next: any) : {} => {
    return res.status(400).json({ message: err.message })
})

const port: number = 4321

app.listen(port, () => console.log(`Server running in http://localhost:${port}`))