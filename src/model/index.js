import OrderDetail from './DetailOrder.js'
import Order from './Orders.js'
import Category from './Category.js'
import Product from './Product.js'
import Role from './Role.js'
import User from './User.js'

Role.hasMany(User, { foreignKey: 'roleId' })
User.belongsTo(Role, { foreignKey: 'roleId' })

Category.hasMany(Product, { foreignKey: 'categoryId' })
Product.belongsTo(Category, { foreignKey: 'categoryId' })

Product.belongsToMany(Order, { through: OrderDetail, foreignKey: 'productId' })
Order.belongsToMany(Product, { through: OrderDetail, foreignKey: 'orderId' })

export { Category, Product, OrderDetail, Order, User, Role }
