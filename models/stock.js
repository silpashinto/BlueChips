module.exports = function(sequelize, DataTypes) {
  var Stock = sequelize.define(
    "Stock",
    {
      stockId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      stockTicker: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        },
       unique:true 
      },
      stockName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Exchange: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }      
    },
    {
      freezeTableName: true
    }
  );  
 
  return Stock;
};
