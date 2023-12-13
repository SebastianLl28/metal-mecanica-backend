import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const Order = db.define(
  'order',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.0,
      validate: {
        min: 0.0
      }
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed'),
      allowNull: false,
      defaultValue: 'pending',
      validate: {
        isIn: [['pending', 'completed']]
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true,
        notEmpty: true
      }
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id'
      }
    }
  },
  {
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
  }
)

export default Order
