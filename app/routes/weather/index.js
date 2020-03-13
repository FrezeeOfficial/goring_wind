const app = module.exports = require('express')();

var { getCurrentWind, getTide } = require('./../../actions/index').weather;

app.post("/getCurrent", (req, res) => {
    if (req.query.type) {
        switch (req.query.type) {
            case "wind":
                    res.send({res: getCurrentWind()});
                    res.end();
                break;
                case "tide":
                    res.send({res: getTide()});
                    res.end();
                break;
        }
    } else {
        res.status(404).send({res: "unknown query type"});
    }

})