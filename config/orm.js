var connection = require("../config/connection");

var tableName = "burgers";

var orm = {
    selectAll : (tableName, callback) {
        let queryStatement = 'SELECT * FROM ${tableName};';

        connection.query(queryStatement, (err, result) {
            if (err) throw err;
            console.log("Added Successfully");
            callback(result);
        });

    },

    updateOne : (tableName, cols, vals, condition, callback) {
        let queryStatement = 'UPDATE ${tableName} SET ${cols.toString()} = ? WHERE ${condition}';

        connection.query (queryStatement, vals, (err, result) {
            if (err) throw err;
            console.log("Updated Successfully");
            callback(result);
        });
    }
}

module.exports = orm;