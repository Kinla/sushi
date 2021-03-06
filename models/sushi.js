/*
all: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result)
        })
    },

*/

const orm = require("../config/orm.js")

const model = {
    all: (callback) => {
        orm.selectAll("sushi", (res) => {
            callback(res)
        })
    },
    insert: (sushiName, callback) => {
        orm.insertOne("sushi", "sushi_name", sushiName, (res) => {
            callback(res)
        })
    },
    updateById: (id, callback) => {
        orm.updateOne("sushi", "devoured", true, "id", id, (res) => {
            callback(res)
        })
    },
    deleteByCondition: (col, val, callback) => {
        orm.deleteOne("sushi", col, val, (res) => {
            callback(res)
        })
    }
}

module.exports = model