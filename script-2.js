// npm understanding

// installing and uninstalling anything basics & advanced
// install -> npm i packageKaName
// uninstall -> npm uninstall packageKaName
// instaling particular vision -> npm i packageName@version

// understanding node_modules

// dependencies -> kono package install korle sae package ar sathe jae aro package gula install hoea jae oogulae dependencies
// devDependencies -> amon packageges ja sudhu dev development a kaj e asbe, kintu jokhon app ba project ready hoea jabe tokhon amra ae package gula use korbo na ba proyojon hoi nae


const http = require('http')

const server = http.createServer(function(req,res){
    res.end("hello world")

})
server.listen(3000) 