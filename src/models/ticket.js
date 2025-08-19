'use strict';
const {
  Model
} = require('sequelize');
const { ENUMS } = require('../utils/common');
const {PENDING,SUCCESS,FAILED} = ENUMS.NOTIFICATION_STATUS;
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject: {
      type: DataTypes.STRING,
      allowNull:false
    },
    content: {
      type: DataTypes.STRING,
      allowNull:false
    },
    recepientEmail: {
      type: DataTypes.STRING,
      allowNull:false
    },
    status: {
     type: DataTypes.ENUM(PENDING,SUCCESS,FAILED),
        // value:[('PENDING','SUCCESS','FAILED')],
        defaultValue:PENDING
    }
    }, {
    sequelize,
    modelName: 'Ticket',
   });
  return Ticket;
};