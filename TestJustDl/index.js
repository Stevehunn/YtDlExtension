const express = require('express');

const bodyParser = require('body-parser');

const path = require("path");
const fs = require("fs");

const dirpath = path.join(__dirname);

const expresszip = require('express-zip');

const {exec} = require('child_process');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const port = 5000 || process.env.PORT

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/download', (req, res) => {
    var url = req.body.url

    exec(`youtube-dl --write-all-thumbnails ${url} --skip-download`, (err, stdout, stderr) => {
        if (err) {
            console.log(err)
        }
        else {
            // download the thumbnail as a attachment
            fs.readdir(dirpath, function (err, files) {
              const imagefiles = files.filter(
                (el) => path.extname(el) === ".jpg" || ".webp"
              );
              // do something with your files, by the way they are just filenames...
                console.log(imagefiles)
            });
        }
    })

})

app.listen(5000, () => {
    console.log('listening on port 5000')
})