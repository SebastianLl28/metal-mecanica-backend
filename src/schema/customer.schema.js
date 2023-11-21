import z from 'zod'

export const registerCustomerSchema = z.object({
  name: z.string(),
  lastName: z.string().optional().nullable(),
  email: z.string().email(),
  address: z.string().min(1),
  phone: z.string().min(1),
  identification: z.string().min(8).max(12).optional().nullable(),
  ruc: z.string().max(11).optional().nullable()
})
