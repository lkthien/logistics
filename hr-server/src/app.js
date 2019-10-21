import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import mongodb from 'mongodb';

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '../public')))

//database
const MongoClient = mongodb.MongoClient
const uri = "mongodb+srv://admin:admin@cluster0-oe9sm.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useUnifiedTopology: true })
client.connect(err => {
  console.log('logged', err)
  // perform actions on the collection object
  const collection = client.db("hr").collection("account")
  console.log(collection)
  client.close()
})

app.use('/', indexRouter)

export default app;
