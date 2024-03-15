import * as z from 'zod'

export const calculationPayload = z.object({
  targetA1C: z.coerce.number().positive(),
  correctionFactor: z.coerce.number().positive(),
  carbohydrateFactor: z.coerce.number().positive(),
  a1cReading: z.coerce.number().positive(),
  carbohydrates: z.coerce.number().positive(),
})

export type CalculationPayload = z.infer<typeof calculationPayload>
