// LOAD DATA
const express = require('express');
const app = express();
const db = require('../db/db.json');
const fs = require('fs');
const { json } = require('express');

// ROUTING

  module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {

      db.push({...req.body,id: Math.floor(Math.random()*999999).toString()})

      console.log('db', db)

      fs.writeFile('./db/db.json', JSON.stringify(db), (err) => err ? console.error(err) : console.log('complete'))
      res.json();
    });
    
    app.delete('/api/notes/:id', (req, res) => {
      const selectedID = req.params.id;
      let notes = require('../db/db.json')
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (selectedID === notes[index].id) {
          notes.splice(index,1)
        }
      }
      fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => err ? console.error(err) : res.json(notes));
    });
  };