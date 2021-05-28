const express   = require('express');
const prodotti  = require('./data/prodotti.json');
const utenti    = require('./data/utenti.json');
const commenti  = require("./data/commenti.json");
const cors      = require('cors')


const app   = express();
const PORT  = process.env.PORT || 8000


app.use(cors)

//API
app.get('/', function(req,res) {  
    // const hostname = req.header.host;
    // let prods = prodotti.map(e => ({...e, url:req.protocol+"://"+hostname+e.url}))
    // console.log(prods);
    // res.send(prods);
    res.send("MESSAGGIO")
})




app.listen(PORT, () => console.log(`Connesso alla porta: ${PORT}`));
