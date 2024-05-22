import express from 'express';
import morgan from 'morgan';
import nunjucks from 'nunjucks';
import session from 'express-session';

// Allows you to change the port number if needed
const port = '8000';

const app = express();

// Configure the Express app
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'ssshhhhh',
    saveUninitialized: true,
    resave: false,
  }),
);

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.get('/login', (req, res) => {
  res.render('login.html');
});

app.post('/login', (req, res) => {
  const sess = req.session;
  sess.email = req.body.email; // add the user's email to the session
  res.render('dashboard.html');
});

app.get('/', (req, res) => {
  if (req.session.email) {
    // A user is logged in, so show their email
    res.send(`<p>Hello ${req.session.email}!</p><a href="/logout">Logout</a>`);
  } else {
    res.send('<a href="/login">Please login.</a>');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});

app.get('/home', (req, res) => {
  res.render('index.html', { email: req.session.email });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
