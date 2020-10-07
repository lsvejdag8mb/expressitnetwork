
exports.apiChat = function (req, res) {
    console.log(req.body);
    if (req.params.fn == "addMsg") {
        res.send("pridam zpravu...");
    } else if (req.params.fn == "listMsgs") {
        res.send("vylistuju zpravy...");
    } else if (req.params.fn == "test") {
        let obj = {};
        obj.a = "aaa";
        obj.b = "bbb";
        res.send(obj); //posila jako application/json
    } else {
        res.status(400).send("chat - Funkce neexistuje!");
    }

}
