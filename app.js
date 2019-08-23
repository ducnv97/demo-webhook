const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    res.send("this is test webhook");
})

app.post('/webhook', (req, res) => {
    console.log(req.body);

})

app.get('/test',(req, res) =>{
    res.send("this tis test route");
})

app.listen(8000, () => {
    console.log('server run in port 8000');
})