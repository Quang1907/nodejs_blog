const express = require('express');
const app = express();
const port = 2700;

app.get('/', (reg, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send("quangcntt")
})
app.get('/tin-tuc', (reg, res) => res.send("tin tuc"))

app.listen(port, () => console.log(`localhost::${port}`))