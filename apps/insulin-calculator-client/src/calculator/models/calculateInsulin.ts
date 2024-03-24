import { CalculationPayload } from "./CalculationPayload";
import { CalculationResult } from "./CalculationResult";

const roundToNearestTenth = (value: number) => {
  return Math.floor(value * 10) / 10
}

export const calculateInsulin = (payload: CalculationPayload): CalculationResult => {
  const {
    targetA1C,
    correctionFactor,
    carbohydrateFactor,
    a1cReading,
    carbohydrates
  } = payload

  const rawCorrection = roundToNearestTenth((a1cReading - targetA1C)  / correctionFactor)
  let correction = rawCorrection
  if(rawCorrection < 0) {
    correction = 0
  }

  const coverage = roundToNearestTenth(carbohydrates / carbohydrateFactor)


  let recommendedDosage: number
  const rawRecommendedDosage = correction + coverage
  const nearestWhole = Math.floor(rawRecommendedDosage)
  const decimal = rawRecommendedDosage - nearestWhole
  if(decimal <= 0.3) {
    recommendedDosage = nearestWhole
  }
  else if(decimal > 0.3 && decimal <= 0.7) {
    recommendedDosage = nearestWhole + 0.5
  }
  else {
    recommendedDosage = nearestWhole + 1
  }

  return { correction, coverage, recommendedDosage }
}
