var mongoose = require('mongoose');

var pohonSchema = new mongoose.Schema({
    jenis_pohon: String,
    gambar: String,
    kingdom: String,
    subkingdom: String,
    superdivisi: String,
    divisi: String,
    kelas: String,
    ordo: String,
    famili: String,
    genus: String,
    spesies: String,
    syarat: [ String ],
    cara_penanaman: [ String ]
 });
module.exports = mongoose.model("Pohon", pohonSchema);

