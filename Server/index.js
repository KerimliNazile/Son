const app = express()
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose, {Schema} from 'mongoose'



app.use(cors())
app.use(express.json())
dotenv.config()

const narsSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    price: { type: Number, required: true }

}, { timestamps: true })

const Nars = mongoose.model("Nars", narsSchema)

app.get('/nars', async (req, res) => {
    try {
        const nars = await Nars.find({})
        res.send(nars)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.get('/nars/:id', async (req, res) => {
    try {
        const nars = await Nars.findById(req.params.id)
        res.send(nars)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.post('/nars', async (req, res) => {
    try {
        const nar = new Nars({
            image: req.body.image,
            title: req.body.title,
            text: req.body.text,
            price:req.body.price
        })
        await nar.save()
        res.send({ message: "Created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.delete('/nars/:id', async (req, res) => {
    try {
        const nars = await Nars.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})
const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("Db not connect" + err))

app.listen(port, () => {
    console.log(`Example app listening on port`)
})