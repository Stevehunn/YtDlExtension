console.log("hello l'extension charge ce script")

var input = document.querySelector('videoUrl');
var format = document.getElementById('choix');
var btn = document.getElementById('btnConf');
var video = 'https://www.youtube.com/watch?v=Q3AQ5D2QFwc';
console.log(input);
console.log(format);
console.log(btn);

var mp4 = false;

function download(url,mp4){
    console.log('enter download function')

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


/* Test autre code
inputUrl.addEventListener('change', e => setValue(e.target.value))

async function setValue(value){
    await browser.storage.local.set({value})
}

async function init(){
    let { value } = browser.local.storage.get('value');
    if(!value){
        value =0;
    }
    inputFormat.value = value;
    setValue(value);
}

init().catch(e => console.error(e));
*/

//Première version
/*
var data = document.getElementById("btnConf").addEventListener('click', getValueForm());

async function getValueForm() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("videoUrl").value;
    var format = document.getElementById("choix").ariaChecked;

    // Afficher la valeur
    console.log("valeur récupérer", input," format souhaité ", format);
}
*/
