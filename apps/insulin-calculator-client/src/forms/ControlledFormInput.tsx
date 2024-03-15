import { useFormContext } from "react-hook-form"
import * as z from "zod"

export const ControlledFormInput = (
  {name, label, placeholder}: {name: string, label: string, placeholder?: string}) => {

  const { register, formState: { errors } } = useFormContext()
  return (
  <label className="form__label">
    <div className="form__label-container">
      <span className="label-text">{ label }</span>
    </div>
    <input type="number" placeholder={placeholder} className="form__input" {...register(name)} />
    <div className="form__label-container">
      {errors[name] && <span className="form__error-message">{(errors[name] as z.ZodIssue).message}</span>}
    </div>
  </label>
  )
}
