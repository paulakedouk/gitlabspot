module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  Post.associate = function(models) {
    // A Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    Post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return Post;
};
