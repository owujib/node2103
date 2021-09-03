const http = require('http');
const path = require('path');
const fs = require('fs');

const { data } = require('./first');
const { getReqData } = require('./events');

const server = http.createServer(async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    console.log(req.method);
    let homeFile = path.join(__dirname, 'views/index.html');
    let homePage = fs.readFileSync(homeFile, 'utf-8');
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (req.url === '/about' && req.method === 'GET') {
    let aboutfile = path.join(__dirname, 'views/about.html');
    let about = fs.readFileSync(aboutfile, 'utf-8');
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(about);
    res.end();
  } else if (req.url === '/contact-us' && req.method === 'GET') {
    let file = path.join(__dirname, 'views/contact.html');
    let contact = fs.readFileSync(file, 'utf-8');
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(contact);
    res.end();
  } else if (req.url === '/contact-us' && req.method === 'POST') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    let body = await getReqData(req);
    res.write(body);
    res.end();
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end(`<h1>Ooops :( ${req.url} does not exists</h1>`);
  }

  // case '/contact-us':
  //   let file = path.join(__dirname, 'views/contact.html');
  //   let contact = fs.readFileSync(file, 'utf-8');
  //   res.writeHead(200, { 'Content-type': 'text/html' });
  //   res.write(contact);
  //   res.end();
  //   return;
  // case '/contact':
  //   res.writeHead(200, { 'Content-type': 'text/html' });
  //   res.write('contact message recieved');
  //   res.end();
  //   return;
  // case '/api/names':
  //   res.writeHead(200, { 'Content-type': 'application/json' });
  //   res.write(JSON.stringify(data));
  //   res.end();
  //   return;
  // default:
  //   res.writeHead(404, { 'Content-type': 'text/html' });
  //   res.end(`<h1>Ooops :( ${req.url} does not exists</h1>`);
  //   return;
});

const port = 5000;
server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
