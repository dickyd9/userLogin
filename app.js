// import express
import express from 'express';
const port = 5000;
const app = express();

// 10.1.1.5:3306
// db
import db from './config/connect_db.js';

//import library
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import session from "express-session"

dotenv.config()

// connection db
try {
  await db.authenticate();
  console.log('Database Connected...')
} catch (error) {
  console.log(error);
}

// import router
import usersRouter from './modules/user/route.js';

//app use
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(session({
  secret: 'password is very secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 10000,
    secure: true
  }
}));
app.set('trust proxy', 1)

// use Router
app.use(usersRouter);


app.listen(port, () => {
  console.log(`app running at 10.1.1.5:${port}`)
})