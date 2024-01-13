import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const Role = db.define('role', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  freezeTableName: true
})

export default Role
