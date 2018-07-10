const express = require('express');
const fs = require('fs');
const util = require('util');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/counter', async (req, res) => {
  let content = await readFile( 'dataBase.txt', "utf8" );
  res.send({data: Number(content)}); 
});

app.post('/api/post', async (req, res, next) => {
  await writeFile("dataBase.txt", req.body.counter);
  res.status(201).send('POST request'); 
})

app.listen(port, () => console.log(`Listening on port ${port}`));
