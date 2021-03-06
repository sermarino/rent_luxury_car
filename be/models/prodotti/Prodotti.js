const SchemaProdotti = {
    ID:"Codice univoco della singola macchina. String",
    codice:"Codice identificato della macchina. String",
    brand:"Nome della casa automobilistica. String",
    modello:"Modello specifico della macchina. String",
    tipo:"Tipologia di auto. String",
    descrizione:"Descrizione della macchina. String",
    prezzo_h:"Prezzo orario se si sceglie una singola giornata. Number",
    prezzo_d:"Prezzo giornaliero se si scegliere di estendere a più giornate. Number",
    prezzo_m:"Prezzo mensile se si scegliere di estendere all'intero mese. Number",
    immagini: "Elenco url immagini. Array di string",
    info: {
        max:"Velocità massima in km/h. Number",
        cavalli: "Numero di Cavalli",
        accelerazione:"Da 0 a 100 espresso in secondi. Number",
        motore:"Tipo di motore. String",
        alimentazione:"Tipo di alimentazione. String",
        cambio:"Tipo di meccanica. String",
        cambioAtomatico:"Boolean per la ricerca. Boolean: true=automatico, false=manuale",
        peso:"Peso in kg. Number",
        posti:"Numero posti auto. Number",
        colore:"Colore della macchina. String"
    },
    commenti: "Elenco id commenti al prodotto. Array di String"
}
    