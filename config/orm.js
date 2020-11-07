const connection = require("../config/connection")

function printQuestionMarks(num) {
    var arr = [];

    for (var i=0; i < num; i++){
        arr.push("?")
    }
    return arr.toString();
}

function objToSql(ob){
    var arr = [];

    for(var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob,key)){
        if(typeof value === "string" && value.indexOf(" ") >= 0){
            value = "'" + value + "'"
        }
        arr.push(key + "=" + value);
    }
    }
    return arr.toString();
}

let orm = {
    //select all
    all: function(tableInput, cb) {
        let queryString = "Select * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err){ throw err; }
            cb(result)
        });
    },
    //insert one
    create: function(table, cols, vals, cb){
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString)

        connection.query(queryString, vals, function(err, result){
            if (err){
                throw err;
            }
            cb(result)
        })
    },
//updateOne()
    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err) {throw err}

            cb(result);
        });
    }
}

module.exports = orm;