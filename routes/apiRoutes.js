// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const util = require('util');
const { stringify } = require('querystring');
const { v4: uuidv4} = require('uuid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// ROUTING


  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  router.get('/notes', (req, res) => {
      readFile('db/db.json','utf8').then(notes => {
          console.log(notes)
          const parsedNotes = JSON.parse(notes)
          console.log('parsedNotes:', parsedNotes)
          res.send(parsedNotes)
        })
  });

  router.post('/notes', (req, res) => {
    readFile('db/db.json','utf8').then(notes => {
        console.log(notes)
        const parsedNotes = JSON.parse(notes)
        console.log("this is the body from the request", req.body)
        req.body.id = uuidv4();
        console.log("this is the body from the request with the id appended", req.body)
        parsedNotes.push(req.body)
        writeFile('db/db.json', JSON.stringify(parsedNotes))
        console.log('parsedNotes:', parsedNotes)
        // res.send(parsedNotes)
      })
    });

    router.delete('/notes/:id', (req, res) => {
        // readFile('db/db.json','utf8').then(notes => {
          
            //read the db.json file
            //compare req.params.id with id on each object of the json 
            //delete the object that contains the same id (HINT splice)
            //write back to db.json
            console.log(req.params.id)

        console.log('delete!!!!!!!!!')
            // const parsedNotes = JSON.parse(notes)
            // console.log('parsedNotes:', parsedNotes)
            // res.send(parsedNotes)
        //   })
        res.end()
    });


//   router.get('/api/waitlist', (req, res) => res.json(waitListData));

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

//   router.post('/api/tables', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     } else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   router.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });

  module.exports = router
