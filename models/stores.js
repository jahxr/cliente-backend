const mongoose  =  require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    imagen: String,
    location: {
        lat: Number,
        lng: Number
      },
    idCategoria: Number,
    productos: [
        {
            name: String,
            imagen: String,
            precio: Number,
            descripcion: String
        }
    ]
})

module.exports = mongoose.model('tiendas', schema)
