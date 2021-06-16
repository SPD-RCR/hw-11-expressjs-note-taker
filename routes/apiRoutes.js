// LOAD DATA
const express = require('express');
const app = express();
const db = require('../db/db.json');
const fs = require('fs');
const { json } = require('express');
// const util = require('util');
// const { stringify } = require('querystring');
//const { v4: uuidv4} = require('uuid');

// ROUTING

  module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {

      db.push(req.body);

      console.log('db', db)

      fs.writeFile('../db/db.json', JSON.stringify(db), (err) => err ? console.error(err) : console.log('complete'))
      res.json(db);
    });
    
    app.delete('/api/notes/:id', (req, res) => {
      let index = db.findIndex(note => note.id === req.query.id);
      note.splice(index, 1);

      // readFile('db/db.json','utf8').then(notes => {

          //read the db.json file
          //compare req.params.id with id on each object of the json 
          //delete the object that contains the same id (HINT splice)
          //write back to db.json
          //console.log(req.params.id)

      console.log('delete!!!!!!!!!')
          // const parsedNotes = JSON.parse(notes)
          // console.log('parsedNotes:', parsedNotes)
          // res.send(parsedNotes)
      //   })
      res.end()
  });
    // app.post('/api/notes', (req, res) => {
    //   readFile('../db/db.json','utf8').then(notes => {
    //       console.log(notes)
    //       const parsedNotes = JSON.parse(notes)
    //       console.log("this is the body from the request", req.body)
    //       req.body.id = uuidv4();
    //       console.log("this is the body from the request with the id appended", req.body)
    //       parsedNotes.push(req.body)
    //       writeFile('../db/db.json', JSON.stringify(parsedNotes))
    //       console.log('parsedNotes:', parsedNotes)
    //       // res.send(parsedNotes)
    //     })
    //   });
    };
  //module.exports = app
