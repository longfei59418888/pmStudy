'use strict';
module.exports = (sequelize, DataTypes) => {
  const userAddresss = sequelize.define('userAddresss', {
    name: DataTypes.TEXT
  }, {});
  userAddresss.associate = function(models) {
    // associations can be defined here
  };
  return userAddresss;
};