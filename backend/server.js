const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001; // Utilisation du port 3001 pour le backend

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration de la connexion à MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'real_estate_management', // Remplacez par le nom de votre base de données
  port: 8889, // Port MySQL, ajustez si nécessaire
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' // Chemin du socket MySQL, ajustez si nécessaire
});

// Connexion à MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connecté à la base de données MySQL');
});

// Définir les routes
app.get('/tenants', (req, res) => {
  const sql = 'SELECT * FROM tenants';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des locataires');
      throw err;
    }
    res.status(200).json(result);
  });
});

app.post('/tenants', (req, res) => {
  const { name, apartment, rent, contract_start, contract_end } = req.body;
  const sql = 'INSERT INTO tenants (name, apartment, rent, contract_start, contract_end) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, apartment, rent, contract_start, contract_end], (err, result) => {
    if (err) {
      res.status(500).send('Erreur lors de l\'ajout du locataire');
      throw err;
    }
    res.status(201).send('Locataire ajouté avec succès');
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
