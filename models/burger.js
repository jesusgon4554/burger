//import orm.js into burgers.js
const orm = require("../config/orm.js")
//call orm functions using burger specific input fot the orm

let burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res)
        });
    },
    create:function(cols,vals,cb){
        console.log("columns are", cols,  "values are", vals)
        orm.create("burgers", cols, vals, function(res){
                cb(res);
        });
    },

    update: function(objColVals, condition, cb){
        orm.update("burger", objColVals, condition, function(res){
            cb(res);
        })
    },
    delete: function(condition, cb){
        orm.delete("burger", condition, function(res){
            cb(res);
        })
    }
};
//export
module.exports = burger;