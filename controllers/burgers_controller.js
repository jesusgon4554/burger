//import express and burger.js
const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js")
//create router for app
router.get("/", function(req, res) {
    burger.all(function(data){
     
        console.log(data);
        res.render("index", {  burgers : data, stringify : JSON.stringify(data) });
    });
});

router.post("/api/burger", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ], [
        String(req.body.name), Boolean(req.body.devoured)
    ], function(result) {
        res.redirect('/')
        //res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res){
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

//export router
module.exports = router;