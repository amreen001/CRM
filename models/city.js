'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.state, {foreignKey: 'state_id'})
    }
  }
  city.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'city',
    underscored: true
  });
  return city;
};