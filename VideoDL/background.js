console.log("hello l'extension charge ce script")

/* truc à faire -> require ne fonctionne pas
const express =require("express");
const cors =require("cors")
const ytdl =require("ytdl-core");
const app =express();
*/

var input = document.querySelector('videoUrl');
var format = document.getElementById('choix');
var btn = document.getElementById('btnConf');
var videoTest = 'https://www.youtube.com/watch?v=Q3AQ5D2QFwc';
var mp4 = false;


function download(url,mp4){
    console.log('enter download function')

    if(mp4){
        ytdl(url, { filter: format => format.container === 'mp4' })
        console.log('download mp4 format...')
    } else {
        ytdl(url, { filter: format => format.container === 'mp3' })
        console.log('download mp3 format...')
    }
    
}

function getValueForm(url){
    console.log('recover data')
    if(!mp4){
        alert("Format select: MP3. Start of the download")
    } else{
        alert("Format select: MP4. Start of the download")
    }
    download(url,mp4)
}



// ✅ Check if the input exists before addEventListener()
if (input) {
    input.addEventListener('click', () => {
      console.log('input clicked');

    });
}

// ✅ Check if the checkbox exists before addEventListener() and define the format select
if (format) {
    format.addEventListener('click', () => {
      console.log('format clicked');
      if(!mp4){
        mp4 = true;
        console.log('Format mp4')  
      } else {
        mp4 = true;
        console.log('Format mp3')  
      }
      
    });
}

// ✅ Check if btn exists before addEventListener()
if (btn) {
    btn.addEventListener('click', () => {console.log('input clicked');
    //input = video;
    var myInput = document.getElementById("videoUrl");
    let valueInput = myInput.value
    if (myInput && myInput.value) {
    console.log("My input has a value!");
    console.log(valueInput);
    }
    getValueForm(valueInput);
    });
}


console.log(input);
console.log(format);
console.log(btn);