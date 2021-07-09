/*
 * @Author: JAM-SEVEN
 * @Date: 2021-07-01 17:45:58
 * @LastEditTime: 2021-07-08 14:54:51
 * @Description: TO DO
 */

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

logger.token('body', (req, res) => JSON.stringify(req.body));

app.use(express.json());
app.use(express.static('build'));
app.use(
  logger(':method :url :status :res[content-length] - :response-time ms :body')
);
app.use(cors());

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

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/info', (request, response) => {
  const info = `Phonebook has info for ${persons.length} people`;
  const time = new Date();
  response.send(`<div>${info}<br><br>${time}</div>`);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  console.log(id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  persons = persons.filter((note) => note.id.toString() !== id);
  console.log(persons);

  response.status(204).end();
});

const generateId = () => {
  const Id = Math.round(Math.random() * 1000);
  return Id;
};
let i = 1;
app.post('/api/persons', (request, response) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: 'name missing'
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'number missing'
    });
  }

  const names = persons.map((person) => person.name.toLowerCase());
  if (names.indexOf(body.name.toLowerCase()) !== -1) {
    return response.status(400).json({ error: 'name must be unique' });
  } else {
    const person = {
      name: body.name,
      number: body.number,
      id: generateId()
    };
    persons = persons.concat(person);
    response.json(person);
  }
});

const PORT = 3002;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
