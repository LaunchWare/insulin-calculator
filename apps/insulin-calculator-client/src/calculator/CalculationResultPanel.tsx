import { CalculationResult } from "./models/CalculationResult";

export const CalculationResultPanel = ({ result }: { result: CalculationResult | null }) => {
  if (!result) {
    return null
  }
  return <div className="card shadow-xl border border-success text-center mx-auto">
    <div className="stat">
      <h3 className="stat-title text-3xl">Recommended Dosage</h3>
      <h2 className="stat-value text-success">{ result.recommendedDosage }</h2>
      <div className="stat-desc">
        <p>Units</p>
        <p>Correction: {result.correction} units</p>
        <p>Carbohydrate Coverage: {result.coverage} units</p>
      </div>
    </div>
  </div>
}
