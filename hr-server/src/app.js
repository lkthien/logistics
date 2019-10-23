import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
// import bodyparser from 'body-parser';
import logger from 'morgan';
import indexRouter from './routes/index.router';
import mongoose from 'mongoose';

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    ////Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    //// Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    //// Set to true if you need the website to include cookies in the requests sent
    //// to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//database
// const MongoClient = mongodb.MongoClient
const uri = "mongodb+srv://admin:admin@cluster0-oe9sm.mongodb.net/hr?retryWrites=true&w=majority"
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true})
// client.connect(err => {
//   console.log('Mongo Connected')
// })
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}).then(db =>{
 console.log('Connect success', db.name)
}).catch(err => console.log(err))

app.use('/', indexRouter)

export default app;
