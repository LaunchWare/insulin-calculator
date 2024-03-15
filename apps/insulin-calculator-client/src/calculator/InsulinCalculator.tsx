import { FormProvider, useForm } from "react-hook-form"
import "./css/form.css"
import { ControlledFormInput } from "../forms/ControlledFormInput"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const calculationPayload = z.object({
  targetA1C: z.coerce.number().positive(),
  correctionFactor: z.coerce.number().positive(),
  carbohydrateFactor: z.coerce.number().positive(),
  a1cReading: z.coerce.number().positive(),
  carbohydrates: z.coerce.number().positive(),
})

type CalculationPayload = z.infer<typeof calculationPayload>

export const InsulinCalculator = () => {
  const hookFormPayload = useForm<CalculationPayload>({
    resolver: zodResolver(calculationPayload),
  })
  const { handleSubmit } = hookFormPayload

  const onSubmit = (data: CalculationPayload) => {
    console.log(data)
  }
  return <FormProvider {...hookFormPayload} >
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Insulin Calculator</h1>
      <ControlledFormInput name="targetA1C" label="Target A1C" placeholder="Target A1C" />
      <ControlledFormInput name="correctionFactor" label="Correction Factor" placeholder="Correction Factor" />
      <ControlledFormInput name="carbohydrateFactor" label="Carbohydrate Factor" placeholder="Carbohydrate Factor" />
      <ControlledFormInput name="a1cReading" label="A1C Reading" placeholder="A1C Reading" />
      <ControlledFormInput name="carbohydrates" label="Carbohydrates (g)" placeholder="Carbohydrates (g)" />

      <div>
        <input type="submit" value="Calculate" className="form__submit-button" />
      </div>
    </form>
  </FormProvider>
}
