module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    firstname: {
      type: Sequelize.STRING,
      required: true
    },

    lastname: {
      type: Sequelize.STRING,
      required: true
    },

    username: {
      type: Sequelize.TEXT,
      required: true
    },

    about: {
      type: Sequelize.TEXT
    },

    email: {
      type: Sequelize.STRING,
      required: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING,
      required: true
    },

    last_login: {
      type: Sequelize.DATE
    },

    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });

  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: 'cascade'
    });
  };

  return User;
};
