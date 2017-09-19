module.exports = function(sequelize, DataTypes) {
  var Picks = sequelize.define("Picks", {

      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 225]
        }
      },
      game_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0  
      },
      game_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_5: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_6: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_7: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_8: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0   
      },
      game_9: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_10: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_11: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_12: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_13: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_14: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_15: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      game_16: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      mnf_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },
      overall_points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
      }
  });
  return Picks;
};






