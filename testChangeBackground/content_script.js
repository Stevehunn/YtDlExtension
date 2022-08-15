let style = document.createElement('style');
document.body.appendChild(style);

browser.storage.onChange.addListener((changes, area) => {
    if(area === 'local' && 'value' in changes){
        PresenceUpdateStatus(changes.value.newValue);
    }
});

function update(value) {
    document.body.style.border = " $value px solid red"
   // style.innerText ='html { filter: brightness( ${value} ) !important }';
}

browser.storage.local.get('value').then(result => update(result.value));