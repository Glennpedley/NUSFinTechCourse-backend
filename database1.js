//the only difference from dixant's file is the database we are using here aka
//"b9_group5_jeremy" for now cos I didnt want to mess up our group's database. If we connect to b9_group5, some of the functions will need a rewrite as the columns differ in volume and syntax
//later I wil try to populate this database more with the data that Candace already wrote
const mysql = require("mysql");

var properties = {
  host: "fintechsg08.mysql.database.azure.com",
  port: 3306,
  user: "fintechlab@fintechsg08",
  password: "FinTechSG2021",
  database: "b9_group5_jeremy",
};

var connection = mysql.createConnection(properties);

connection.connect((errors) => {
  if (errors) {
    console.log("Couldn't connect to the MySQL Server. Error: " + errors);
  } else {
    console.log("Connected to MySQL successfully!");
  }
});   

setInterval(() => {
  connection.query("select 1");
}, 60 * 1000);

module.exports = { connection };
