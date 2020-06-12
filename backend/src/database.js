const mongoose = require('mongoose');

class Database {
    constructor() {
        this.init();
    }

    init(){
        mongoose.connect(
            'mongodb://localhost:27017/tindev',
            {useNewUrlParser:true, useUnifiedTopology:true}
        );
    }
}

module.exports = new Database();