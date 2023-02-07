const mongoose = require("mongoose");

const connect = () => {
    mongoose
    .connect()
    .catch(err => console.log(err));
}

mongoose.connection.on("error", err => {
    console.error("몽고디비 연결에러", err)
})

module.exports = connect;
