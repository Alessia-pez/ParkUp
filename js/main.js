"use strict";

function mostraMessaggio(testo) {
    try {
        let box = document.getElementById("messaggio");
        if (box) {
            box.innerHTML = testo;
            box.style.display = "block";
        }
    } catch(errore) {
        console.log("Errore mostraMessaggio: " + errore);
    }
}

function nascondiMessaggio() {
    try {
        let box = document.getElementById("messaggio");
        if (box) {
            box.style.display = "none";
        }
    } catch(errore) {
        console.log("Errore nascondiMessaggio: " + errore);
    }
}

function validaForm() {
    try {
        let nome = document.getElementById("nome");
        let email = document.getElementById("email");

        if (nome && nome.value === "") {
            mostraMessaggio("Attenzione: inserisci il tuo nome e cognome.");
            nome.focus();
            return false;
        }

        if (email && email.value === "") {
            mostraMessaggio("Attenzione: inserisci la tua email.");
            email.focus();
            return false;
        }

        mostraMessaggio("Modulo inviato correttamente! Ti contatteremo al più presto.");
        return true;

    } catch (errore) {
        console.log("Errore: " + errore);
    }
}

function contaPosti() {
    try {
        let schede = document.getElementById("scheda-posto");
        let contatore = document.getElementById("num-posti");
        let totale = 0;

        for (let i=0; i<schede.length; i++) {
            totale = totale +1;
        }

        if (contatore) {
            contatore.innerHTML = totale.toString();
        }

        if (elementi && elementi.lenght) {

        }
    } catch (errore) {
        console.log("Errore contaPosti: " + errore);
    }
}

function toggleNote(id) {
    try {
        let note = document.getElementById(id)
        if (note) {
            if (note.style.display === "none" || note.style.display === "") {
                note.style.display = "block";
            } else {
                note.style.display = "none";
            }
        }
    } catch (errore) {
        console.log("Errore toggleNote: " + errore)
    }
}

window.onload = function(){
    contaPosti();
    console.log("ParkUp caricato correttamente!");
};