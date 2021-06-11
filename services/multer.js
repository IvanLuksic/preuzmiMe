const config=require('../config');
const multer=require('multer');

//U storeagu određujemo path i ime datoteke
//Za ime dodajemo trenutno vrijeme da nebi imali dvije datoteke s istim imenom
const storage= multer.diskStorage({
    
    destination: function (req, file, cb){
    
        cb(null, config.fileRootPath);
    
    },
    
    filename: function(req,file,cb){
    
        console.log(Date.now() + '-' + file.originalname);
        cb(null,Date.now() + '-' + file.originalname);
    
    }

});

//U filteru provjeravamo jesu li datoteke nekog od nedopuštenih tipova
const filter = (req,file,cb) => {
    
    if(file.mimetype === 'application/vnd.microsoft.portable-executable' || file.mimetype === 'application/octet-stream')
    {
    
        cb(new Error(file.mimetype + ' is not supported'),false)
    
    } else { 

        cb(null,true);

    } ;
}

//Konfiguriramo multeru opcije
const upload = multer({

    storage: storage,
    limits: { fileSize: config.maxFileSize },
    fileFilter: filter

});

 module.exports = {

    uploadFile: upload

}