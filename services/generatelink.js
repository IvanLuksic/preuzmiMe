const {logger}=require('../loaders/logger');
const randomString = require('randomstring');
const {FileProperties} = require('../models');

module.exports = async function(){

    try {
        
        let linkSearch = 1;
        let link;

        //While petlja se vrti dok je link isti nekom drugom linku u bazi podataka
        //Idealno samo jednom generira i provjeri
        while(linkSearch){
            
            //Generira nasumičan string duljine 16 znakova
            link = randomString.generate(16);

            //Provjerava postoji li taj link već u bazi
            linkSearch = await FileProperties.findOne({
                where: {link: link}
            })

        }

        logger.info("Link extension has been generated: "+ link)
        return link;

    } catch (error) {
        
        logger.error("Error in generating link: "+ error);
        throw(error)

    }



}