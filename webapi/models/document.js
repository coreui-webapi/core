'use strict';
module.exports = (sequelize, DataTypes) => {
    const document = sequelize.define('document', {
        id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
    },
    {
      freezeTableName: true
    });
  return document;
};