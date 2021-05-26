'use strict';

const fileproperties = require("../models/fileproperties");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FileProperties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      link: {
        type: Sequelize.STRING,
        unique: true
      },
      path: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      time_uploaded: {
        type: Sequelize.DATE
      },
      time_expires: {
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING
      },
      num_dl_left: {
        type: Sequelize.INTEGER
      },
      uploader_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FileProperties');
  }
};

