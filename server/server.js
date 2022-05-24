const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults({ noCors: true })
const db = require('./db.json');
const fs = require('fs');
const cors = require('cors'); 
const express = require('express');
const app = express();app.use(cors());
// server.use(middlewares);
// server.use(jsonServer.bodyParser);



app.get('/recentProducts', (req, res, next) => {
  const recentProducts = readRecentPorducts();

  if (recentProducts) {
    res.send(recentProducts);
  } else {
    res.status(404).send('no products found');
  }
});

app.get('/products', (req, res, next) => {
  const products = readPorducts();

  if (products) {
    res.send(products);
  } else {
    res.status(404).send('no products found');
  }
});


app.use(router);
app.listen(3000, () => {
  console.log('JSON Server is running');
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

function readRecentPorducts() {
  const dbRaw = fs.readFileSync('./server/db.json');
  const recentProducts = JSON.parse(dbRaw).recentProducts
  return recentProducts;
}

function readPorducts() {
  const dbRaw = fs.readFileSync('./server/db.json');
  const products = JSON.parse(dbRaw).products
  return products;
}