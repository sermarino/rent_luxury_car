const SchemaUtenti = {
    ID:             "Identificativo univoco utente. String",
    tipo: {
        admin:      "Utente tipo amministratore, può fare tutto. Boolean",
        vendor:     "Proprietario concessionaria fisica, può aggiungere, rimuovere o modificare solo le proprie auto",
        user:       "Utente normale, può solo affittare un'auto. Boolean"
    },
    nome:           "Nome reale dell'utente. String",
    cognome:        "Cognome dell'utente. String",
    alias:          "Username dell'utente. String",
    password:       "Password criptata con md5. MD5",
    email:          "Email di registrazione dell'utente. Email type",
    thumbnail:      "Immagine del prodfilo dell'utente. Non è obbligatoria.",
    }