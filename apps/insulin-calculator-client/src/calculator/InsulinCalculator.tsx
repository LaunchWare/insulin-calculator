import "./css/form.css"
export const InsulinCalculator = () => {
  return <form className="form">
    <h1 className="form__title">Insulin Calculator</h1>
    <label className="form__label">
      <div className="form__label-container">
        <span className="label-text">Target A1C</span>
      </div>
      <input type="number" placeholder="Type here" className="form__input" />
      <div className="form__label-container">
      </div>
    </label>
    <label className="form__label">
      <div className="form__label-container">
        <span className="label-text">Correction Factor</span>
      </div>
      <input type="number" placeholder="Type here" className="form__input" />
      <div className="form__label-container">
      </div>
    </label>
     <label className="form__label">
      <div className="form__label-container">
        <span className="label-text">Carbohydrate Factor</span>
      </div>
      <input type="number" placeholder="Type here" className="form__input" />
      <div className="form__label-container">
      </div>
    </label>
    <label className="form__label">
      <div className="form__label-container">
        <span className="label-text">A1C Reading</span>
      </div>
      <input type="number" placeholder="Type here" className="form__input" />
      <div className="form__label-container">
      </div>
    </label>
    <label className="form__label">
      <div className="form__label-container">
        <span className="label-text">Carbohydrates (g)</span>
      </div>
      <input type="number" placeholder="Type here" className="form__input" />
      <div className="form__label-container">
      </div>
    </label>
  </form>
}
