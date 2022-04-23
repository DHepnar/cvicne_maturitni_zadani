$(document).ready(()=>{
    $('#pridat').click(pridat);
});

function pridat() {
    let nadpis = $('#nadpis').val().trim();
    let telo = $('#telo').val().trim();
    console.log(nadpis, telo);
    if(!nadpis) {
        $('#hlaseni').html('Nadpis není zadaný');
    } else if (!telo) {
        $('#hlaseni').html('Tělo není zadané');
    } else {
        $('#hlaseni').html('');

        fetch('/prispevky/pridat', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify ({
                nadpis,
                telo,
            }),
        })
        .then(odpoved => odpoved.json())
        .then(reakce => {
            if(reakce.uspech) {
                location.href = reakce.url;
            }
        });
    }
}