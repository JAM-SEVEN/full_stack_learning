/*
 * @Author: JAM-SEVEN
 * @Date: 2021-07-09 17:33:48
 * @LastEditTime: 2021-07-09 18:10:29
 * @Description: TO DO
 */

const mongoose = require('mongoose');

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  }
];

mongoose.connect('mongodb://localhost:27017/fullstack', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  const personSchema = new mongoose.Schema({
    name: String,
    number: String
  });
  const Person = mongoose.model('Person', personSchema);
  //   persons.forEach((person) => {
  //     new Person(person).save().then((result) => {
  //       console.log(`added ${person.name} ${person.number} to phonebook`);
  //       mongoose.connection.close();
  //     });
  //   });
  Person.find().then((results) => {
    results.forEach((result) => {
      console.log(result);
    });
    mongoose.connection.close();
  });
  // Person.find().then((result) => {console.log();}
});
