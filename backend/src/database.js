const mongoose = require('mongoose');

class Database {
    constructor() {
        this.init();
    }

    init(){
        mongoose.connect(
            'mongodb+srv://daniel:s1stemas@developer-qeffp.gcp.mongodb.net/tindev?retryWrites=true&w=majority',
            {useNewUrlParser:true, useUnifiedTopology:true}
        );
    }
}

module.exports = new Database();