const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todos');

const app = express();

connectDB();

const PORT = process.env.PORT || 4000;

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(todoRoutes);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
