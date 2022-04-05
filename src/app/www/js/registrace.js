$(document).ready(() => {
    $('#registrovat').click(registrovat);
});

function registrovat() {
    let jmeno = $('#jmeno').val().trim();
    let heslo = $('#heslo').val().trim();
    let heslo_potvrzeni = $('#heslo_potvrzeni').val().trim();
    
    if(!jmeno) {
        $('#hlaseni').html('Jméno není zadané');
    } else if(!heslo) {
        $('#hlaseni').html('Heslo není zadané');
    } else if(heslo != heslo_potvrzeni){
        $('#hlaseni').html('Hesla se neshodují');
    } else {
        $('#hlaseni').html('');

        fetch('/uzivatel/registrovat', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                    jmeno,
                    heslo,
                }),
        })
        .then(odpoved => odpoved.json())
        .then(reakce =>{
            if(!reakce.uspech){
                $('#hlaseni').html(reakce.hlaseni);
            } else {
                location.href = reakce.url;
            }
        });
    }
}