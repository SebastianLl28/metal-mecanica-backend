import Customer from '../model/Customer.js'

export const findAllCustomer = async (query = {}) =>
  await Customer.findAndCountAll(query)

export const findCustomerById = async id => await Customer.findByPk(id)

export const createCustomer = async customer => await Customer.create(customer)

export const updateCustomer = async (id, customer) =>
  await Customer.update(customer, { where: { id } })

export const deleteCustomer = async id =>
  await Customer.destroy({ where: { id } })
