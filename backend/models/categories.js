const mongoose  =  require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    id: Number,
    color: String,
    icono: String
})

module.exports = mongoose.model('categories', schema)