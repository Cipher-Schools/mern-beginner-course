let express = require('express');
let app = express();


app.get('/home', (req, res) => {
    res.send('Hello, this is a express response')
})

app.listen(5000, 'localhost', () => {
    console.log('Listening at port 5000');
})