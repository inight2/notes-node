console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.add(2, 4);
console.log('Result: ' + res);



// var user = os.userInfo;
// fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.age}`, function(err){
//     if (err) throw err;
//      console.log('The "data to append" was appended to file!');
// });
