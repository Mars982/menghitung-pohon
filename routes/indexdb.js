var express = require('express');
var router = express.Router();
var Pohon = require('../models/models');

    

/* GET home page. */
router.get('/', function(req, res, next) {
    // var data = new Pohon({
      
    //     jenis_pohon: 'Pohon Apel',
    //     gambar: 'http://www.lpmdinamika.co/wp-content/uploads/2015/02/10965752_765017016907478_1752078601_n2.jpg',
    //     kingdom: 'Plantae',
    //     subkingdom: 'Tracheobionta',
    //     superdivisi: 'Spermatophyta',
    //     divisi: 'Magnoliophyta',
    //     kelas: 'Magnoliopsida',
    //     ordo: 'Rosales',
    //     famili: 'Rosaceae',
    //     genus: 'pyrus',
    //     spesies: 'Pyrus malus L',
    //     syarat: ['Tinggi pohon apel antara 3 hingga 12 meter.', 'Baik ditanam pada ketinggian lokasi 700-1500 mdpl dengan suhu udara sekitar 16-27 derajat Celcius.', 'Beriklim kering atau memiliki curah hujan tahunan 1000-2500 mm dengan penyinaran matahari 50-60% per hari, dan kelembaban udara 75-85%.', 'Dapat tumbuh di beberapa jenis tanah, yaitu Regosol (Entisol), Andosol (Andisol), dan Latosol (Inceptisol). Karakter tanah yang ideal adalah tekstur sedang, konsistensi gembur, kedalaman efektif >50 cm, drainase baik, dan pH tanah 5.5-7.', 'Curah hujan yang tinggi dapat menggagalkan pembuahan saat musim bunga berlangsung.', 'Luas untuk 1 pohon apel sekitar 9 m^2, dengan jarak antar 1 bibit pohon apel ke bibit pohon apel lainnya ialah 298 cm atau 2.98 m untuk ukuran diameter bibit sebesar 2 cm.'],
    //     cara_penanaman: ['Penanaman dapat dilakukan pada awal musim hujan.', 'Siapkan lubang dengan ukuran yang dianjurkan adalah panjang, lebar, dan kedalaman masing-masing 60 cm.', 'Masukkan tanah galian yang berwarna lebih gelap dan gembur dicampur 20 kg pupuk kandang dan 0.5 kg dolomit atau fosfat alam jika tanah berpH kurang dari 5.5.', 'Diamkan selama minimal 2 minggu.', 'Masukkan bibit pohon apel, atur akarnya agar menyebar ke segala arah, timbun akar dengan tanah sampai setinggi leher akar sembari dipadatkan agar berdiri tegak dan tidak mudah roboh.', 'Pasang ajir, ikat secara longgar.']

    // })    
    // data.save()
    //     .then(doc => {
    //         console.log(doc)
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
    // var Athlete = mongoose.model('Athlete', yourSchema);

    // // find all athletes who play tennis, selecting the 'name' and 'age' fields
    // Athlete.find(function (err, athletes) {
    //     if (err) return handleError(err);
    //     // 'athletes' contains the list of athletes that match the criteria.
    //     })
    let items = []

    Pohon
        .find()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })
    console.log(items)

  res.render('index', { title: 'Web App Hitung Pohon', info: items });
});
router.post('/', function(req, res, next) {
  const luas_apel = 9;``
  const luas_belimbing = 25;
  const luas_buahnaga = 4;
  const luas_cermai = 25;
  const luas_delima = 25;
  const luas_durian = 100;
  const luas_duwet = 64;
  const luas_jambuair = 64;
  const luas_jambubiji = 36;
  const luas_jeruk = 36;
  const luas_kelengkeng = 100;
  const luas_manggis = 100;
  const luas_pepaya = 4;
  const luas_pisang = 9;
  const luas_rambutan = 100;
  const luas_sawo = 100;
  const luas_sirsak = 25;
  const luas_srikaya = 16;

  const diameter_bibit_apel = 2;
  const diameter_bibit_belimbing = 1.5;
  const diameter_bibit_buahnaga = 5;
  const diameter_bibit_cermai = 1.5;
  const diameter_bibit_delima = 1.5;
  const diameter_bibit_durian = 2;
  const diameter_bibit_duwet = 1.5;
  const diameter_bibit_jambuair = 1.5;
  const diameter_bibit_jambubiji = 1.5;
  const diameter_bibit_jeruk = 1.5;
  const diameter_bibit_kelengkeng = 2;
  const diameter_bibit_manggis = 1.5;
  const diameter_bibit_pepaya = 2;
  const diameter_bibit_pisang = 5;
  const diameter_bibit_rambutan = 2;
  const diameter_bibit_sawo = 2;
  const diameter_bibit_sirsak = 2;
  const diameter_bibit_srikaya = 1.5;

  const jarak_bibit_apel = 2.98;
  const jarak_bibit_belimbing = 4.985;
  const jarak_bibit_buahnaga = 1.95;
  const jarak_bibit_cermai = 4.985;
  const jarak_bibit_delima = 4.985;
  const jarak_bibit_durian = 9.98;
  const jarak_bibit_duwet = 7.985;
  const jarak_bibit_jambuair = 7.985;
  const jarak_bibit_jambubiji = 5.985;
  const jarak_bibit_jeruk = 5.985;
  const jarak_bibit_kelengkeng = 9.98;
  const jarak_bibit_manggis = 9.985;
  const jarak_bibit_pepaya = 1.98;
  const jarak_bibit_pisang = 2.95;
  const jarak_bibit_rambutan = 9.98;
  const jarak_bibit_sawo = 9.98;
  const jarak_bibit_sirsak = 4.98;
  const jarak_bibit_srikaya = 3.985;

  input = 'true'
  console.log(req.body.luas);
  let pohon = req.body.pohon;
  let luas = req.body.luas;

  if (pohon == 'Apel') {
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_apel);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_apel;
    let jarak = jarak_bibit_apel;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Belimbing'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_belimbing);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_belimbing;
    let jarak = jarak_bibit_belimbing;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Buah Naga'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_buahnaga);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_buahnaga;
    let jarak = jarak_bibit_buahnaga;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Cermai'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_cermai);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_cermai;
    let jarak = jarak_bibit_cermai;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Delima'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_delima);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_delima;
    let jarak = jarak_bibit_delima;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Durian'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_durian);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_durian;
    let jarak = jarak_bibit_durian;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Duwet'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_duwet);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_duwet;
    let jarak = jarak_bibit_duwet;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Jambu Air'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_jambuair);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_jambuair;
    let jarak = jarak_bibit_jambuair;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Jambu Biji'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_jambubiji);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_jambubiji;
    let jarak = jarak_bibit_jambubiji;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Jeruk'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_jeruk);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_jeruk;
    let jarak = jarak_bibit_jeruk;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Kelengkeng'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_kelengkeng);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_kelengkeng;
    let jarak = jarak_bibit_kelengkeng;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Manggis'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_manggis);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_manggis;
    let jarak = jarak_bibit_manggis;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Pepaya'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_pepaya);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_pepaya;
    let jarak = jarak_bibit_pepaya;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Pisang'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_pisang);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_pisang;
    let jarak = jarak_bibit_pisang;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Rambutan'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_rambutan);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_rambutan;
    let jarak = jarak_bibit_rambutan;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Sawo'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_sawo);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_sawo;
    let jarak = jarak_bibit_sawo;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Sirsak'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_sirsak);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_sirsak;
    let jarak = jarak_bibit_sirsak;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 
  else if (pohon == 'Srikaya'){
    parseInt(luas);
    let jumlah_pohon = Math.floor(luas/luas_srikaya);
    console.log(jumlah_pohon);
    let diameter_bibit = diameter_bibit_srikaya;
    let jarak = jarak_bibit_srikaya;
    toString(luas);
    res.render('index', { title: 'Web App Hitung Pohon', luas, pohon, jumlah_pohon, diameter_bibit, jarak});
  } 

  else {
    console.log(err);
  }
});

module.exports = router;
