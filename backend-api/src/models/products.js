'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
    }
  }
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    photo: DataTypes.STRING,
    provider: DataTypes.STRING,
    stock: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'products',
    timestamps: false,
  });
  return products;
};