import { ZodError } from 'zod'

/**
 * @param {import('zod').AnyZodObject} schema
 */
export const schemeValidation = schema => (req, res, next) => {
  try {
    schema.parse(req.body)
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(
        error.issues.map(issue => ({
          path: issue.path[0],
          message: issue.message
        }))
      )
    }

    return res.status(400).json({ message: 'Internal server error' })
  }
}
