//import express and burger.js
const express = require("express");
const app = express.Router();

const burger = require("../models/burger.js")
//create router for app
app.get("/", function(req, res) {
    burger.all(function(data){
        let hbsObject = {
            cats: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

app.post("/api/burger", function(req, res){
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

app.put("/api/burger/:id", function(req, res){
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