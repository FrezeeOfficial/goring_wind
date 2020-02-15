const app = module.exports = require('express')();



app.post('/getCurrent', (req, res) => {

    function wind() {
        var sqldata = [
            {
                name: "LOCAL",
                location: "Goring",
                distance: "0",
                speed: "40",
                direction: "WSW"
            },
            {
                name: "GORING",
                location: "Goring",
                distance: "0.8",
                speed: "40",
                direction: "WSW"
            },
            {
                name: "LANCING",
                location: "Lancing",
                distance: "6.6",
                speed: "39",
                direction: "WSW"
            }
        ]

        res.send({data: sqldata, info: "your information is tracked and improper use will result in ban"})
    }

    if (req.query.type) {
        switch(req.query.type) {
            case "wind":
                wind();
            break;
        }
    } else {
        res.status(404).send({res: 'must state wanted data type'});
    }
});