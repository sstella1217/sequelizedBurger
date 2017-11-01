var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


//module.exports = function(sequelize, DataTypes){
var Burgers = sequelize.define('burgers', {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
    }
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      defaultsValue: false
    }
  });
//  return burgers;
//}
Burgers.sync();

module.exports = Burgers;