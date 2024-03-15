import { calculationPayload } from "../CalculationPayload"
import { calculateInsulin } from "../calculateInsulin"

describe("InsulinCalculation", () => {
  it("provides a correction amount", () => {
    const payload = calculationPayload.parse({
      targetA1C: 150,
      correctionFactor: 130,
      carbohydrateFactor: 30,
      a1cReading: 200,
      carbohydrates: 50,
    });

    const { correction } = calculateInsulin(payload)

    expect(correction).toBe(0.3)
  })

  it("provides a correction amount of 0 if the a1cReading is less than the targetA1C", () => {
    const payload = calculationPayload.parse({
      targetA1C: 150,
      correctionFactor: 130,
      carbohydrateFactor: 30,
      a1cReading: 130,
      carbohydrates: 50,
    });

    const { correction } = calculateInsulin(payload)

    expect(correction).toBe(0.0)
  })

  it("provides a coverage amount", () => {
    const payload = calculationPayload.parse({
      targetA1C: 150,
      correctionFactor: 130,
      carbohydrateFactor: 30,
      a1cReading: 200,
      carbohydrates: 50,
    });

    const { coverage } = calculateInsulin(payload)

    expect(coverage).toBe(1.6)
  })

  it("provides recommended dosage", () => {
    const payload = calculationPayload.parse({
      targetA1C: 150,
      correctionFactor: 130,
      carbohydrateFactor: 30,
      a1cReading: 200,
      carbohydrates: 50,
    });

    const { recommendedDosage } = calculateInsulin(payload)

    expect(recommendedDosage).toBe(2)

  })

});
