/*
 * @Author: JAM-SEVEN
 * @Date: 2021-07-08 16:41:29
 * @LastEditTime: 2021-07-09 17:24:25
 * @Description: TO DO
 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fullstack');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
  });

  const Note = mongoose.model('Note', noteSchema);

  // const note = new Note({
  //   content: 'HTML is Easy',
  //   date: new Date(),
  //   important: true
  // });

  // note.save().then((result) => {
  //   console.log('note saved!');
  //   mongoose.connection.close();
  // });
  Note.find().then((result) => {
    result.forEach((note) => {
      console.log(note);
    });
    mongoose.connection.close();
  });
});
