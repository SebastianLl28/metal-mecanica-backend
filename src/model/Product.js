import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const Product = db.define(
  'product',
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
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'noimagecloudXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'category',
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

export default Product
