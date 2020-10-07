const express = require('express');
const app = express();
const path = require('path');
const apiChat = require("./api-chat").apiChat;
app.use(express.json());
app.use("/static", express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.get('/test', (req, res) => {
    let obj = {};
    obj.a = "aaa";
    obj.b = "bbb";
    res.send(obj); //posila jako application/json
});

app.post('/api-chat/:fn', apiChat);

app.listen(8080, () => console.log('Server bezi na http://localhost:8080...'));
