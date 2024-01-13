import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const Category = db.define(
  'category',
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
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  },
  {
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
  }
)

export default Category
