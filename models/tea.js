'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.tea.hasMany(models.comment)
      models.tea.belongsTo(models.user)
    }
  }
  tea.init({
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    source: DataTypes.STRING,
    varities: DataTypes.STRING,
    advantages: DataTypes.STRING,
    color: DataTypes.STRING,
    origin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tea',
  });
  return tea;
};