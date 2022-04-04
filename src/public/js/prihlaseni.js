$(document).ready(() => {
    $('#prihlasit').click(prihlasit);
});

function prihlasit() {
    let jmeno = $('#jmeno').val().trim();
    let heslo = $('#heslo').val().trim();

    if(!jmeno) {
        $('#hlaseni').html('Jméno není zadané');
    } else if(!heslo) {
        $('#hlaseni').html('Heslo není zadané');
    } else {
        $('#hlaseni').html('');

        fetch('/uzivatel/prihlasit', {
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