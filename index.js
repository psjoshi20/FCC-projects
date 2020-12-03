const express = require ('express')
const app = express();
const port = 8000;

app.get('/', (req,res) => {
    res.send("Hello world , - testing my tribute page")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});