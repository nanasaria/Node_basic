const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
});

app.get("/produtos/:modelo/:item", function(req, res){
    res.send("Modelo: " + req.params.modelo + "<br>Item: " + req.params.item);
});

app.get("/fornecedor/:filial", function(req, res){
    res.send(req.params.filial);
});

app.listen(8081, function(){
    console.log("Server Ativo :)");
})