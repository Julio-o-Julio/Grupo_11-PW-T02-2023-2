const express = require('express');

const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const routeCategories = require('./routes/category');
const routeUsers = require('./routes/users');

const app = express();

app.use('/categories', routeCategories);
app.use('/users', routeUsers);

app.listen(8800, () => console.log('Server in http://localhost:8800'));
