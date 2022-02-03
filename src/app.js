const express = require('express'),
      path   = require('path'),
      morgan = require('morgan'),
      mysql  = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');
const vehiculoRoutes = require('./routes/vehiculo');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: '127.1.0.0',
  user: 'root',
  password: '123',
  port: 3306,
  database: 'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);
app.use('/', vehiculoRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
