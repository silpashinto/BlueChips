module.exports = function(sequelize, DataTypes) {
    var Stockstatus = sequelize.define(
      "Stockstatus",
      {
        stockStatusId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        stockStatus: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          },
        },
         description: {
            type: DataTypes.STRING,
            allowNull: true
         }        
      },
      {
        freezeTableName: true,
        timestamps: false
      }
    );
    return Stockstatus;
  };
  