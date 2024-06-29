import express from 'express';
import ViteExpress from 'vite-express'

const app = express()
const port = 5090;

// Middleware
ViteExpress.config({printViteDevServerHost: true});
app.use(express.urlencoded({extended:false}))
app.use(express.json());

ViteExpress.listen(app, port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})