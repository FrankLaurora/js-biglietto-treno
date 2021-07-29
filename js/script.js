//richiedo all'utente la distanza da percorrere
var distance = parseInt(prompt('Inserisci la distanza che vuoi percorrere.'));

//chiedo l'età all'utente
var age = parseInt(prompt('Inserisci la tua età.'));

//calcolo il prezzo del biglietto in base al chilometraggio
var fullPrice = distance * 0.21;

//applico una promozione se l'età rientra nelle fasce agevolate
//arrotondo il prezzo del biglietto
//stampo il prezzo del biglietto in pagina
var discountedPrice;

if (age < 18) {
    discountedPrice = (fullPrice * 80 / 100).toFixed(2);
    document.getElementById('ticket_price').innerHTML = "Il tuo biglietto costa " + discountedPrice + "€";
} else if (age >= 65) {
    discountedPrice = (fullPrice * 60 / 100).toFixed(2);
    document.getElementById('ticket_price').innerHTML = "Il tuo biglietto costa " + discountedPrice + "€";
} else {
    fullPrice = fullPrice.toFixed(2);
    document.getElementById('ticket_price').innerHTML = "Il tuo biglietto costa " + fullPrice + "€";
}

