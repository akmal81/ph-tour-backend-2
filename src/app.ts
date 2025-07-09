import express,{Request, Response} from "express"


const app = express()

app.get("/", (req: Request, res: Response) => { 
    res.status(200).json({
        message:"Welcom to PH-T-M-S"
    })
})

export default app;