var bcrypt = require("bcrypt-nodejs");
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        },
        allowNull: false
      },
      password: {
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
   
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // User.hook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(
  //     user.password,
  //     bcrypt.genSaltSync(10),
  //     null
  //   );
  // });
  return User;
};
