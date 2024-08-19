import createError from 'http-errors';
import express, { Errback, ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/indexRouter';
import pageRouter from './routes/pageRouter';
import usersRouter from './routes/users';
import User from './model/userModel';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, "../", 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname,"../", 'public')));

app.use('/', indexRouter);
app.use('/page', pageRouter)
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




export default app;
