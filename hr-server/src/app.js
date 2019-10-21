import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
// import mongodb from 'mongodb';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, '../public')))

//database
// const MongoClient = mongodb.MongoClient
const uri = "mongodb+srv://admin:admin@cluster0-oe9sm.mongodb.net/hr?retryWrites=true&w=majority"
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true})
// client.connect(err => {
//   console.log('Mongo Connected')
// })
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}).then(db =>{
 console.log('Connect success', db)
}).catch(err => console.log(err))

app.use('/', indexRouter)

export default app;
