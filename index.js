const http = require('http');
const path = require('path');
const fs = require('fs');

const { data } = require('./first');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      let homeFile = path.join(__dirname, 'views/index.html');
      let homePage = fs.readFileSync(homeFile, 'utf-8');
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(homePage);
      res.end();
      return;
    case '/about':
      let aboutfile = path.join(__dirname, 'views/about.html');
      let about = fs.readFileSync(aboutfile, 'utf-8');
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(about);
      res.end();
      return;
    case '/contact-us':
      let file = path.join(__dirname, 'views/contact.html');
      let contact = fs.readFileSync(file, 'utf-8');
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(contact);
      res.end();
      return;
    case '/api/names':
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.write(JSON.stringify(data));
      res.end();
      return;
    default:
      res.writeHead(404, { 'Content-type': 'text/html' });
      res.end(`<h1>Ooops :( ${req.url} does not exists</h1>`);
      return;
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
