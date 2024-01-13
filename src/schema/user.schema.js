import z from 'zod'

export const registerUserSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
  document: z.string().max(20)
})

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
})
