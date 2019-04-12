module.exports = function(sequelize, DataTypes) {
    var Mystock = sequelize.define(
      "MyStock",
      {
        mystockId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        mystockTicker: {
          type: DataTypes.STRING,
          allowNull: false
        },
        stockstatusId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        numberofShares:{
            type: DataTypes.INTEGER
        },
        price:{
            type: DataTypes.FLOAT
        }

      },
      {
        freezeTableName: true
      }
    );  
   
    return Mystock;
  };
  