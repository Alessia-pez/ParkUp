"use strict";

let miaMappa = L.map("mappa").setView([40.8518, 14.2681], 13)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(miaMappa);

let posti = [
    {
        nome: "Box coperto - Centro Storico",
        lat: 40.8400,
        lng: 14.2493,
        prezzo: "2,00 euro/ora",
        disponibile: true
    },
    {
        nome: "Posto scoperto - Vomero",
        lat: 40.8484,
        lng: 14.2387,
        prezzo: "1,50 euro/ora",
        disponibile: true
    },
    {
        nome: "Garage privato - Chiaia",
        lat: 40.8313,
        lng: 14.2434,
        prezzo: "2,50 euro/ora",
        disponibile: true
    },
    {
        nome: "Posto auto - Fuorigrotta",
        lat: 40.8278,
        lng: 14.1994,
        prezzo: "1,20 euro/ora",
        disponibile: false
    },
    {
        nome: "Box coperto - Rione Alto",
        lat: 40.8596,
        lng: 14.2210,
        prezzo: "1,50 euro/ora",
        disponibile: false
    }
];

for (let i = 0; i < posti.length; i++) {
    try {
        let posto = posti [i];
        let stato = posto.disponibile ? "Disponibile" : "Non disponibile";
        let testoPopup = "<strong>" + posto.nome + "</strong>" + "<br>" +
                                  "Prezzo: " + posto.prezzo + "<br>" +
                                  "Stato:" + stato;
        L.marker([posto.lat, posto.lng])
            .addTo(mappa)
            .bindPopup(testoPopup);

    }catch(errore) {
        console.log("Errore nel caricamento del posto: " + errore);
    }
}
