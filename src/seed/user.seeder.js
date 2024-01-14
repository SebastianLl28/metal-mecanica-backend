import { findRoleByName } from '../service/role.service.js'
import { hashText } from '../helpers/bcrypt.js'

export const listUser = async () => {
  const adminRole = await findRoleByName('ADMIN')
  const password = await hashText('123456789')
  return [
    {
      name: 'Admin',
      lastName: 'Admin',
      email: 'admin@admin.com',
      password,
      document: '75629082',
      roleId: adminRole.id
    }
  ]
}
