const express = require('express'); //import express
const path = require('path');
const homeRoutes = require('./routes/home.routes');
const postsRoutes = require('./routes/posts.routes');
//initialize our app
const app = express();

//post middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//templating set up
app.set('views', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//static route middleware
app.use(express.static(path.join(__dirname, 'public')));

//routes middleware
app.use('/', homeRoutes);
app.use('/post', postsRoutes);

//api response
app.get('/api/names', (req, res, next) => {
  res.status(200).json({
    names: ['Ejike', 'Chinedu', 'Smart'],
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
