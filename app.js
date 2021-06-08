var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = require('express')();

var options = {
  host: 'www.irkbus.ru',
  port: 'http://www.irkbus.ru/',
  path: '/php/getVehiclesMarkers.php?rids=19-0,20-0,1-1,2-1,67-0,66-0,283-0,282-0,344-0,343-0,4-1,3-1,5-1,232-0,233-0,5-0,6-0,201-0,202-0,83-0,84-0,11-1,10-1,2-0,1-0,9-1,8-1,347-0,348-0,6-1,7-1,129-0,128-0,18-0,17-0,215-0,214-0,12-1,307-0,306-0,3-0,4-0,12-0,11-0,23-0,24-0,56-0,57-0,63-0,62-0,10-0,9-0,308-0,309-0,61-0,60-0,296-0,297-0,243-0,242-0,26-0,25-0,14-0,13-0,15-0,16-0,64-0,65-0,311-0,310-0,346-0,69-0,68-0,71-0,70-0,27-0,28-0,73-0,72-0,53-0,52-0,279-0,278-0,332-0,36-0,37-0,235-0,234-0,35-0,34-0,229-0,228-0,127-0,126-0,298-0,299-0,301-0,300-0,77-0,78-0,125-0,124-0,81-0,82-0,80-0,79-0,302-0,303-0,30-0,31-0,223-0,222-0,206-0,207-0,224-0,225-0,209-0,208-0,351-0,350-0,352-0,353-0,241-0,240-0,286-0,287-0,227-0,226-0,211-0,210-0,217-0,216-0,218-0,219-0,338-0,337-0,42-0,43-0,335-0,336-0,355-0,354-0,237-0,236-0,221-0,220-0,326-0,327-0,49-0,48-0,313-0,312-0,314-0,292-0,293-0,305-0,304-0,345-0,46-0,47-0,290-0,291-0,33-0,32-0,213-0,212-0,316-0,315-0,342-0,341-0,295-0,203-0,21-0,22-0,38-0,230-0,231-0,339-0,340-0,323-0,324-0,280-0,281-0,123-0,238-0,239-0,321-0,349-0,333-0,334-0&lat0=0&lng0=0&lat1=90&lng1=180&curk=14209879&city=irkutsk&info=12345&_=1551242793746'
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Accept", "application/json, text/javascript, */*; q=0.01");
   res.header("Accept-Language", "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7");
   next();
});

app.get("/api/*", function(req, res){
    apiProxy.web(req, res, { target: 'http://www.irkbus.ru/php/getVehiclesMarkers.php?rids=67-0,66-0,2-1,1-1,19-0,20-0,4-1,3-1,343-0,344-0,282-0,283-0,6-0,5-0,5-1,232-0,233-0,347-0,348-0,8-1,9-1,83-0,84-0,201-0,202-0,11-1,10-1,1-0,2-0,128-0,129-0,7-1,6-1,215-0,214-0,18-0,17-0,12-1,12-0,11-0,4-0,3-0,23-0,24-0,306-0,307-0,9-0,10-0,57-0,56-0,63-0,62-0,61-0,60-0,309-0,308-0,13-0,14-0,243-0,242-0,15-0,16-0,297-0,296-0,25-0,26-0,310-0,311-0,64-0,65-0,346-0,68-0,69-0,27-0,28-0,71-0,70-0,73-0,72-0,53-0,52-0,279-0,278-0,332-0,36-0,37-0,234-0,235-0,35-0,34-0,228-0,229-0,127-0,126-0,299-0,298-0,300-0,301-0,78-0,77-0,124-0,125-0,82-0,81-0,80-0,79-0,303-0,302-0,31-0,30-0,222-0,223-0,206-0,207-0,225-0,224-0,209-0,208-0,240-0,241-0,287-0,286-0,226-0,227-0,211-0,210-0,216-0,217-0,219-0,218-0,337-0,338-0,42-0,43-0,336-0,335-0,237-0,236-0,220-0,221-0,327-0,326-0,49-0,48-0,312-0,313-0,314-0,293-0,292-0,305-0,304-0,345-0,46-0,47-0,290-0,291-0,32-0,33-0,212-0,213-0,316-0,315-0,342-0,295-0,341-0,203-0,21-0,22-0,38-0,230-0,231-0,339-0,340-0,324-0,323-0,320-0,319-0,281-0,280-0,322-0,123-0,329-0,328-0,238-0,239-0,321-0,349-0,334-0,333-0&lat0=0&lng0=0&lat1=90&lng1=180&curk=21407291&city=irkutsk&info=12345&_=1548651097070' });
});

app.get('/BLABLA', function(req, res) {

    const options = {
        method: 'GET',
        uri: 'http://irkbus.ru/',
        qs: {
            rids: "2-1,1-1,4-1,3-1",
            lat0: 0,
            lng0: 0,
            lat1: 90,
            lng1: 180,
            curk: 21407291,
            city: "irkutsk",
            info: 12345,
            _:1548651097070
        }
    }

    request(options)
        .then(function (response) {
            res.render('index', { res: response });
        })
        .catch(function (err) {
            console.log(err);
        })
    });



module.exports = app;
