//import orm.js into burgers.js
const orm = require("../config/orm.js")
//call orm functions using burger specific input fot the orm

let burger = {
    all: function(cb) {
        orm.all("burger", function(res){
            cb(res)
        });
    },
    create:function(cols,vals,cb){
        orm.create("burger", objColVals, condition, function(res){
                cb(res);
        });
    }
};
//export
module.exports = burger;