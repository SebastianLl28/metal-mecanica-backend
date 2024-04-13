import z from 'zod'

export const productPostSchema = z.object({
  description: z.string({
    required_error: 'La descripción es requerida',
    invalid_type_error: 'La descripción debe ser una cadena de texto'
  }),
  price: z.number({
    required_error: 'El precio es requerido',
    invalid_type_error: 'El precio debe ser un número'
  }),
  stock: z
    .number({
      required_error: 'El stock es requerido',
      invalid_type_error: 'El stock debe ser un número'
    })
    .min(0, 'El stock no puede ser negativo'),
  image: z.optional(
    z
      .string({
        required_error: 'La imagen es requerida',
        invalid_type_error: 'La imagen debe ser una cadena de texto'
      })
      .url('La imagen debe ser una URL válida')
  ),
  categoryId: z.string({
    required_error: 'La categoría es requerida',
    invalid_type_error: 'La categoría debe ser una cadena de texto'
  })
})
