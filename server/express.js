const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { App } = require('../src/components/app');
const CRUD = require('../src/operations/CRUD');

const app = express();
const Router = express.Router();

Router
  .route('/')
  .get(CRUD.read)
  .post(CRUD.create);
Router
  .route('/:id')
  .delete(CRUD.del)
  .get(CRUD.readOne);

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

// app.get(/\.(js|css)$/, express.static(path.resolve(__dirname, '../dist')));

app.use('/api/posts', Router);

app.use('*', (req, res) => {
  const url = req.originalUrl;
  if (url.endsWith('.js')) {
    res
      .status(200)
      .contentType('text/javascript')
      .sendFile(path.resolve(__dirname, '../dist/main.js'));
  } else if (url.endsWith('.css')) {
    res
      .status(200)
      .contentType('text/css')
      .sendFile(path.resolve(__dirname, '../dist/main.css'));
  } else {
    let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
      encoding: 'utf8',
    });
    let appHTML = ReactDOMServer.renderToString(
      <StaticRouter location={req.originalUrl}>
        <App />
      </StaticRouter>
    );

    indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);

    res
      .status(200)
      .contentType('text/html')
      .send(indexHTML);
  }
});

app.listen(process.env.PORT || 5320, () => {
  console.log('Server starts.');
});