// e khane ami siksi kivabe express dea routes handle korte hoi , nodemon ae npm package use korle code a kono notun update hole server auto reset nae, npm reload package use korle abong html code ar vitor <script src="/reload/reload.js"></script> ae code ta use korle browser auto relode nae protibar code change hole , fole bar bar browser reload dea lage na new update dekhar jonne'.. 

// kintu script proti route a use korte hobe nahole akta route auto reload nibe but onno route auto reload nibe na

const reload = require("reload");

const express = require('express')
const app = express();

app.get("/",function(req,res){
    res.send(`
        <h1>hey man...</h1>
        <script src="/reload/reload.js"></script>
        `)
})

app.get("/about", function(req,res){
    res.send(`
        <h1>this is about page..</h1>
        <script src="/reload/reload.js"></script>
        `)
})

app.listen(3000);

// attach reload
reload(app).then((reloadReturned) => {
  // optional: trigger reload manually
});