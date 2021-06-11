'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FileProperties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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