import { findRoleByName } from '../service/role.service.js'

export const listUser = async () => {
  const adminRole = await findRoleByName('ADMIN')
  console.log('asdasdkjnaklsdaklfhskdhfkisjdfbhsidgnsd')
  console.log(adminRole)
  return [{
    name: 'Admin',
    lastName: 'Admin',
    email: 'admin@admin.com',
    password: '123456789',
    document: '75629082',
    roleId: adminRole.id
  }]
}
