const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './view');

require('dotenv').config();

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/webhook', (req, res) => {
    console.log('test post method webhook');
    console.log(req.body);
    console.log(req.query);
    res.send('ok');
    

})


let port = process.env.PORT || 8000

app.listen(port , () => {
    console.log('server run in port ' + port);
})
