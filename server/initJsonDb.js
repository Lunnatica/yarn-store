/* This script generates db.json for local development. */
const fs = require('fs');
fs.copyFile('./server/db.base.json', './server/db.json', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Mock data generated - server/db.json.');
  }
});
