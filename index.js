const express = require("express");
const jsonParse = require("json-parser");
const PORT = 3000;
const app = express();


app.listen(PORT, function(){
    console.log('Corriendi en el puerto 3000!');
});