module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username: {
      type: DataTypes.STRING,
      defaultValue: 'Anonymous',
      len: [1]
    }
  });

  Comment.associate = function(models) {
    // A comment has an associated post and cannot be created without an associated post.
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comment;
};
