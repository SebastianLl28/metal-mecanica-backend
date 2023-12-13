import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const OrderDetail = db.define(
  'orderDetail',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1
      }
    },
    // El price va por que puede variar pero se puede almacenar
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.0,
      validate: {
        min: 0.0
      }
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    orderId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'order',
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

export default OrderDetail
