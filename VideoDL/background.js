console.log("hello l'extension charge ce script")

/*
const express =require('express');
const cors =require('cors')
const ytdl =require('ytdl-core');
const app =express();
*/

/*
import express from 'express';
import cors from 'cors';
import ytdl from 'ytdl-core';
const app =express();
*/
/*
import ytdl from 'ytdl-core'; with --esModuleInterop
import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
import ytdl = require('ytdl-core'); with neither of the above
*/

var input = document.querySelector('videoUrl');
var format = document.getElementById('choix');
var btn = document.getElementById('btnConf');
var btnConv = document.getElementById('btnConvert');
var videoTest = 'https://www.youtube.com/watch?v=Q3AQ5D2QFwc';
var mp4 = false;


function download(url,mp4){
    console.log('enter download function')

    if(mp4){
        ytdl(url, { filter: format => format.container === 'mp4' })
        console.log('download mp4 format...')

        // redirect to finish.html
        location.href='finish.html'
    } else {
        downloadMp3(url)
        console.log('download mp3 format...')
      
        // redirect to finish.html
        location.href='finish.html'
    }
    
}

function downloadMp3({ mp3File, params: { url } }, res, next) {
    console.log("downloadMp3")
    if ( mp3File ) {
        console.log("mp3 file next")
     next()
    }
    
    ytdl.getInfo(url, { quality: 'highestaudio' }, function(err, info) {
     var stream = ytdl.downloadFromInfo(info, {
      quality: 'highestaudio'
     })
   
     ffmpeg(stream)
     .audioBitrate(info.formats[0].audioBitrate)
     .withAudioCodec("libmp3lame")
     .toFormat("mp3")
     .saveToFile(`mp3/${videoId}.mp3`)
     .on("error", function(err) {
      console.log('error', err)
      res.json(err)
     })
     .on("end", function() {
      next() 
     })
    })
    console.log("ytdl fin") 
   }

function getValueForm(url){
    console.log('recover data')
    if(!mp4){
        alert("Format select: MP3. Start of the download")
    } else{
        alert("Format select: MP4. Start of the download")
    }
    // redirect to loading.html
    location.href='loading.html'
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

// ✅ Check if btnConvert exists before addEventListener()
if (btnConv) {
    btnConv.addEventListener('click', () => {console.log('input clicked');
    // redirect to view.html
     location.href='view.html'
    });
    
}


console.log(input);
console.log(format);
console.log(btn);