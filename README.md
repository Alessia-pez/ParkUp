# ParkUp (English version)

## Project Description
ParkUp is a web application that allows users to rent and find private parking spaces in the city. The goal is to
solve the parking problem in large cities by connecting people who have a free parking space with those who
need one nearby.
The project was developed as an exam for the Web Technologies course at the University of Naples
L'Orientale, following the technologies and patterns studied in class.

## Technologies Used
- Structure --> HTML5 --> Semantic page structure.
- Style --> CSS3 (external) --> Stylesheet in a separate file.
- Logic --> JavaScript ES6 --> Functions, DOM, events, try...catch.
- Maps --> Leaflet.js 1.9.4 Interactive map --> with OpenStreetMap.
- Versioning --> GitHub --> Public repository with MIT license. 

## Project Structure
ParkUp/
- index.html ← Homepage with hero, stats and navigation
- lista.html ← Parking list with Leaflet map and table
- prenota.html ← Booking form (date, time, user data)
- aggiungi.html ← Form to list your own parking space 
- contatti.html ← Contact page with form and FAQ
- conferma.html ← Booking confirmation page
- pubblicato.html ← Listing confirmation page
- messaggioinviato.html ← Message sent confirmation page
- css/
      - style.css ← External stylesheet
- js/
      - main.js ← Shared JS functions (validation, DOM)
      - mappa.js ← Leaflet map with markers and popups
- images/ ← Parking space images

## Main Features
For people looking for parking
- View an interactive map with all available parking spaces in Naples.
- Check the table with prices, hours and availability of each space.
- Read detailed cards with photos, address and owner notes.
- Book a space by filling in a form with name, email, date and time.
- Receive a booking confirmation page upon completion.

For people who want to rent their space
- Fill in the form with parking details (name, address, price, type).
- Upload a photo of the parking space (JPG, PNG, max 5MB).
- Specify availability hours.
- Receive a listing confirmation page upon completion.

## JavaScript Files Description
main.js — shared functions
   - mostraMessaggio(text): shows a message to the user without reloading the page.
   - nascondiMessaggio(): hides the previously shown message.
   - validaForm(): checks that name and email are not empty before submitting the form.
   - contaPosti(): counts the parking cards on the page using a for loop.
   - toggleNote(id): shows or hides the notes of a parking space when the button is clicked.
   - window.onload: executed when the page is loaded — calls contaPosti().
mappa.js — Leaflet map
   - Initializes the map centered on Naples with zoom level 13.
   - Adds the OpenStreetMap tile layer as the map background.
   - Defines an array of 5 parking spaces with coordinates, name, price and availability.
   - Uses a for loop to add a marker for each parking space on the map.
   - Each marker has a popup with name, price and availability status.
   - Uses try...catch to handle any errors when loading markers. 

## How to Run the Project
The project does not require any installation or configuration. Simply:
   - 1. Download or clone the repository from GitHub.
   - 2. Open the project folder in WebStorm.
   - 3. Right-click on index.html → Open in → Browser.
   - 4. The site opens in the browser. The map requires an internet connection.
   Note: Parking space images must be saved in the images/ folder with the names matching those specified in
   the HTML code.

## License
This project is distributed under the MIT License. You are free to use, modify and distribute it, even for
commercial purposes, as long as you maintain attribution to the original author.


# ParkUp (Versione italiana)

##  Descrizione del Progetto
ParkUp è un'applicazione web che permette di affittare e trovare posti auto privati in città. L'obiettivo è
risolvere il problema del parcheggio nelle grandi città, mettendo in contatto chi ha uno spazio libero con chi
cerca parcheggio nelle vicinanze.
Il progetto è stato sviluppato come esame del corso di Tecnologie Web presso l'Università degli Studi di
Napoli L'Orientale, seguendo le tecnologie e i pattern studiati a lezione.

## Tecnologie Utilizzate
- Struttura --> HTML5 --> Struttura semantica delle pagine.
- Stile --> CSS3 (esterno) --> Foglio di stile in file separato.
- Logica --> JavaScript ES6 --> Funzioni, DOM, eventi, try...catch.
- Mappe --> Leaflet.js 1.9.4 --> Mappa interattiva con OpenStreetMap.
- Versionamento --> GitHub --> Repository pubblico con licenza MIT. 

## Struttura del Progetto
ParkUp/
- index.html ← Homepage con hero, statistiche e navigazione
- lista.html ← Lista posti con mappa Leaflet e tabella
- prenota.html ← Form prenotazione (data, orario, dati utente)
- aggiungi.html ← Form per affittare il proprio posto
- contatti.html ← Pagina contatti con form e FAQ
- conferma.html ← Pagina conferma prenotazione
- pubblicato.html ← Pagina conferma pubblicazione annuncio
- messaggioinviato.html ← Pagina conferma invio messaggio
- css/
      - style.css ← Foglio di stile esterno
- js/
      - main.js ← Funzioni JS condivise (validazione, DOM)
      - mappa.js ← Mappa Leaflet con marker e popup
- images/ ← Immagini dei posti auto

## Funzionalità Principali
Per chi cerca parcheggio
   - Visualizza una mappa interattiva con tutti i posti disponibili a Napoli.
   - Consulta la tabella con prezzi, orari e disponibilità di ogni posto.
   - Leggi le schede dettagliate con foto, indirizzo e note del proprietario.
   - Prenota il posto compilando il form con nome, email, data e orario.
   - Riceve una pagina di conferma prenotazione al termine. 
Per chi vuole affittare
   - Compila il form con i dati del parcheggio (nome, indirizzo, prezzo, tipo).
   - Carica una foto del parcheggio (JPG, PNG, max 5MB).
   - Specifica gli orari di disponibilità.
   - Riceve una pagina di conferma pubblicazione al termine.

## Descrizione dei File JavaScript
main.js — funzioni condivise
   - mostraMessaggio(testo): mostra un messaggio all'utente nella pagina senza ricaricarla.
   - nascondiMessaggio(): nasconde il messaggio precedentemente mostrato.
   - validaForm(): controlla che nome e email non siano vuoti prima di inviare il form.
   - contaPosti(): conta le schede posto presenti nella pagina con un ciclo for.
   - toggleNote(id): mostra o nasconde le note di un posto cliccando il pulsante.
   - window.onload: eseguito quando la pagina è caricata — chiama contaPosti().
mappa.js — mappa Leaflet
   - Inizializza la mappa centrata su Napoli con zoom 13.
   - Aggiunge il layer OpenStreetMap come sfondo della mappa.
   - Definisce un array di 5 posti auto con coordinate, nome, prezzo e disponibilità.
   - Usa un ciclo for per aggiungere un marker per ogni posto sulla mappa. 
   - Ogni marker ha un popup con nome, prezzo e stato di disponibilità.
   - Usa try...catch per gestire eventuali errori nel caricamento dei marker.

## Come Avviare il Progetto
Il progetto non richiede alcuna installazione o configurazione. È sufficiente:
   - 1. Scaricare o clonare il repository da GitHub.
   - 2. Aprire la cartella del progetto in WebStorm.
   - 3. Fare clic destro su index.html → Open in → Browser.
   - 4. Il sito si apre nel browser. La mappa richiede connessione internet.
Nota: Le immagini dei posti auto devono essere salvate nella cartella images/ con i nomi corrispondenti a 
quelli indicati nel codice HTML.

## Licenza
   Questo progetto è distribuito con licenza MIT. È possibile usarlo, modificarlo e distribuirlo liberamente, anche
   per scopi commerciali, mantenendo l'attribuzione all'autore original

