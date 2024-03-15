# InsulinCalculator

## Episode 3: Building the Calculator Form

- Insulin Calculation
  - `Insulin = (Carbohydrates / Carbohydrate Factor) + (Blood Sugar - Target Blood Sugar) / Correction Factor`
  - truncate to 1 decimal place
  - add correction dosage and carbohydrate dosage together, round to nearest 0.5

- We need to create a form for all of the inputs
  - Target A1C
  - Correction Factor
  - Carbohydrate Factor
  - A1C Reading
  - Carbohydrates (g)


To accomplish this, we need to install:

- DaisyUI

- react hook form
- @hookform/resolvers
- zod
