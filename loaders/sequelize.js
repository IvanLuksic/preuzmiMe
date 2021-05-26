const {sequelize} = require("./models");

module.exports = {
   SequelizeDBConnection: async function (){
     try {
        await sequelize.authenticate(); //.authenticate() funkcija testira jel konekcija dobra
        console.log("Connected to database.");
     } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1); // .exit() da terminiramo proces nakon errora
     }
    }
}