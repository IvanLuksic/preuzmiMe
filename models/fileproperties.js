'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FileProperties extends Model {

    static associate(models) {
      
    }
  };
  FileProperties.init({
    link: DataTypes.STRING,
    path: DataTypes.STRING,
    type: DataTypes.STRING,
    time_uploaded: DataTypes.DATE,
    time_expires: DataTypes.DATE,
    password: DataTypes.STRING,
    num_dl_left: DataTypes.INTEGER,
    uploader_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FileProperties',
  });
  return FileProperties;
};