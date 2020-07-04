// Importar a dependencia do sqlite3
//const sqlite3 = require("sqlite3").verbose()

const mysql = require("mysql").verbose()

// criar o objeto que fará operações no banco de dados
const db = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  