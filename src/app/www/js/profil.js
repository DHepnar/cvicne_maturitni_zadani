$(document).ready(() =>{
    $('#odhlasit').click(odhlasit);
});

function odhlasit() {
    fetch('/uzivatel/odhlasit')
    .then(odpoved => odpoved.json())
    .then(reakce => {
        if(reakce.uspech) {
            location.href = reakce.url;
        }
    });

}