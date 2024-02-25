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
      type: DataTypes.ENUM(
        'pending',
        'in_progress',
        'ready_to_ship',
        'in_transit',
        'completed',
        'canceled'
      ),
      allowNull: false,
      defaultValue: 'pending',
      validate: {
        isIn: [
          [
            'pending',
            'in_progress',
            'ready_to_ship',
            'in_transit',
            'completed',
            'canceled'
          ]
        ]
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
