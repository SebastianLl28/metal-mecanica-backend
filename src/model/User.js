import db from '../config/db.js'
import { DataTypes } from 'sequelize'
import Role from './Role.js'
import { findRoleByName } from '../service/role.service.js'

const User = db.define(
  'user',
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
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    document: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    roleId: {
      type: DataTypes.UUID,
      references: {
        model: Role,
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

User.addHook('beforeCreate', async user => {
  user.roleId = await findRoleByName('STORE').then(role => role.id)
  return user
})

export default User
