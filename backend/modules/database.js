const mongoose  =  require('mongoose')
const db        = 'ongoing'
const port      = '27017'
const host      = 'localhost'
require('dotenv').config();

class Database {
    constructor(){
        this.connect();
    }

    connect(){
        mongoose.connect(`mongodb+srv://jahxr:<password>@unah.kdeo20q.mongodb.net/?retryWrites=true&w=majority`)
            .then(() => {console.log('connected to Database in mongoDB Atlas')})
            .catch(err => {console.log(err)})
    }
}
s
module.exports = new Database();