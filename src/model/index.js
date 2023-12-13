import OrderDetail from './DetailOrder.js'
import Order from './Orders.js'
import Category from './Category.js'
import Product from './Product.js'

Category.hasMany(Product, { foreignKey: 'categoryId' })
Product.belongsTo(Category, { foreignKey: 'categoryId' })

Product.belongsToMany(Order, { through: OrderDetail, foreignKey: 'productId' })
Order.belongsToMany(Product, { through: OrderDetail, foreignKey: 'orderId' })

export { Category, Product, OrderDetail, Order }
