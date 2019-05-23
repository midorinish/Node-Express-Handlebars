var express = require ("express");
var router = express.Router();

var burger = require("");

router.get("/", function(req, res){
    console.log("route path hit");
    burger.selectAll(data) {
        handlebarsObject = {
            burger: data
        };
        console.log("displayed burgers");
        res.render("index", handlebarsObject);
    }
});

router.post("/api/burger", function (req, res) {
    console.log("burger Route Hit");
    burger.insertOne(["burger_name", "devoured"], [req.body["burger_name"], req.body.devoured], (result), {
        console.log(result);
        res.json(result);
    });
});

router.put("api/burger/:id")