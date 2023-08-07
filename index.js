import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose'
import productRouter from './router/product.js'

const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Api is working!!');
})

app.use('/product', productRouter)

try {
    mongoose.connect('mongodb+srv://saurav:saurav@cluster0.yhxvqom.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected to MongoDb")
} catch (error) {
    console.log(error)
    throw error
}

app.listen(5000, () => {
    console.log('server is Working!! 5000');
})
