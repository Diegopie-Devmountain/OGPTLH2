const express = require('express');
const morgan = require('morgan')

const app = express();
const PORT = 3050;

// Middleware
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

const showRoot = (request, response) => {
  // response.send('Hello from root!')

  const html = `
    <html>
      <body style="background-color: green;">
        <h1>Hello From Root</h1>
      </body>
    </html>
  `
  response.send(html);

}

app.get("/", showRoot)