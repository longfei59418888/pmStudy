'use strict';
module.exports = (sequelize, DataTypes) => {
  const terms = sequelize.define('terms', {
    name: DataTypes.TEXT
  }, {});
  terms.associate = function(models) {
    // associations can be defined here
  };
  return terms;
};