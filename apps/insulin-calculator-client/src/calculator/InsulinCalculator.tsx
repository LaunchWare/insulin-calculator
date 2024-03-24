import { FormProvider, useForm } from "react-hook-form"
import "./css/form.css"
import "./css/insulinCalculator.css"
import { ControlledFormInput } from "../forms/ControlledFormInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalculationPayload, calculationPayload } from "./models/CalculationPayload"
import { useState } from "react"
import { CalculationResult } from "./models/CalculationResult"
import { calculateInsulin } from "./models/calculateInsulin"
import { CalculationResultPanel } from "./CalculationResultPanel"

export const InsulinCalculator = () => {
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null)
  const hookFormPayload = useForm<CalculationPayload>({
    resolver: zodResolver(calculationPayload),
  })
  const { handleSubmit } = hookFormPayload

  const onSubmit = (data: CalculationPayload) => {
    setCalculationResult(calculateInsulin(data))
  }
  return <div className="insulin-calculator__container">
    <FormProvider {...hookFormPayload} >
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
      <CalculationResultPanel result={calculationResult} />
    </FormProvider>
  </div>
}
