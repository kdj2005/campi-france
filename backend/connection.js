const mongoose = require('mongoose');
 async function connection(params) {
  try{  await mongoose.connect("mongodb+srv://fadelkdj:mahouna2005@cluster0.fpnbc.mongodb.net/")
   console.log("connecté à la base de données")
  }
  catch(error){
    console.log("erreur de connexion à la base de données", error)
  }

}
  module.exports = connection;
   

  
 
 
 