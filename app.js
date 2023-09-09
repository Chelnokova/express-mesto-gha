const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Успешно');
  })
  .catch((err) => {
    console.log(`Ошибка ${err}`);
  });

app.use((req, res, next) => {
  req.user = {
    _id: '64fb29121b7992a2e1522f47',
  };

  next();
});

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use('/', (req, res) => {
  res.send('Hello World');
});

// app.get('/users', (req, res) => {
//   User.find({})
//     .then((user) => {
//       res.send({ data: user });
//     })
//     .catch((err) => {
//       console.log(`Ошибка ${err}`)
//     })
// })

app.listen(PORT, () => {
  console.log('Сервер запущен');
});
