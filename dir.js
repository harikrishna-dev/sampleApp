var fs = require('fs');

fs.mkdir('newFolder', () =>{
    fs.readFile('readMe.txt', 'utf8', (err, data) => {
        fs.writeFile('./newFolder/writeMe.txt', data, (err,data) => {
            if(err) console.log(err)
            console.log('Successfully writted file into directory.')
        })
    })
})