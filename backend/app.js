var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer=require('multer');
var computerVision=require('./computerVision')


const storage=multer.diskStorage({
  destination:function(req,file,cb) {
    cb(null,"./")
  },
  filename:function(req,file,cb)
  {
    console.log(file)
    cb(null,file.originalname)
  }
})


const upload=multer({storage:storage})


var app = express();

// view engine setup
const cors = require('cors')

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.post('/add',upload.single('file'),async function(req, res, next) {
  console.log(req.file.path)
  computerVision.computerVision(res,req.file.path)
  
})


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
