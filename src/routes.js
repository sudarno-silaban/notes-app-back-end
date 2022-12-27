/* eslint linebreak-style: ["error", "windows"] */
const {addNoteHandler, 
  getAllNotesHandler, 
  getNoteByIdHanler,
  editNoteByIdHanler,
  deleteNoteByIdHanler} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHanler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHanler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHanler,
  },
];

module.exports = routes; // export data route