'use strict';

const { ENUMS } = require('../utils/common');
const {PENDING,SUCCESS,FAILED} = ENUMS.NOTIFICATION_STATUS;
console.log("ENUMS :",ENUMS)
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull:false
      },
      subject: {
        type: Sequelize.STRING,
        allowNull:false
      },
      content: {
        type: Sequelize.STRING,
        allowNull:false
      },
      recepientEmail: {
        type: Sequelize.STRING,
        allowNull:false
      },
      status: {
        type: Sequelize.ENUM(PENDING,SUCCESS,FAILED),
        // value:[('PENDING','SUCCESS','FAILED')],
        defaultValue:PENDING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};