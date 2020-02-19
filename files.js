var fs = require('fs');

// for sync 
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);
// fs.writeFileSync('writeMe.txt', 'Hey! file is writted.');

// for async
// fs.readFile('readMe.txt', 'utf8', (err, data) => {
//     fs.writeFile('writeMe.txt', data, (err, result) => {
//         if(err) 
//             console.log(err)
//     });
// });

//for checking file status
// fs.stat('writeMe.txt', (err, stats) => {
//     console.log(stats);//here we got all information of file in stats variable
 
//     if (err) {
//         return console.error(err);
//     }
 
//     fs.unlink('writeMe.txt', (err) => {
//          if(err) return console.log(err);
//          console.log('file deleted successfully');
//     });  
//  });

// for remove file
// fs.unlink('writeMe.txt', (err) => {
//     if(err)
//         console.log(err)
// });

// for read stream

var myStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStram = fs.createWriteStream(__dirname + '/writeMe.txt');
myStream.pipe(myWriteStram);
// myStream.on('data', (chunk) => {
//     console.log('read stream chunk is:');
//     console.log(chunk);
//     myWriteStram.write(chunk);
// })