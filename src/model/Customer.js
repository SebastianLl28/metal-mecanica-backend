import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const Customer = db.define(
  'customer',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50)
    },
    email: {
      type: DataTypes.STRING(100)
    },
    address: {
      type: DataTypes.STRING(100)
    },
    phone: {
      type: DataTypes.STRING(20)
    },
    // dni o CE
    document: {
      type: DataTypes.STRING(20)
    },
    ruc: {
      type: DataTypes.CHAR(11)
    }
  },
  {
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
  }
)

export default Customer
