module.exports = function(sequelize, DataTypes) {
    var MyStock = sequelize.define(
      "MyStock",
      {
        mystockId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
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

    MyStock.associate = function(models) {
      MyStock.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "userId"
      });
      MyStock.belongsTo(models.Stock, {
        foreignKey: "stockTicker",
        targetKey: "stockTicker"
      });
    };
   
    return MyStock;
  };
  