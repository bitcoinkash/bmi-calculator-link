import calculateBmi from "../common/calculateBmi";


export default function BmiForm(props) {
  const { height, weight, setWeight, setHeight, setResult } = props;

  return (
    <form>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="text"
          className="form-control"
          placeholder="Cm"
          value={height}
          onChange={(event) => {
            setHeight(event.target.value);
          }} // onChange is an event handler that is called when the value of the input field changes. The event handler is passed an event object as an argument. The event object contains the value of the input field.
        />
      </div>

      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="text"
          className="form-control"
          placeholder="Kg"
          value={weight}
          onChange={(event) => {
            setWeight(event.target.value);
          }} // onChange is an event handler that is called when the value of the input field changes. The event handler is passed an event object as an argument. The event object contains the value of the input field.
        />
      </div>

      <button 
      className="btn btn-success w-100"
      onClick={() => {
        const result = calculateBmi(height, weight);
        setResult(result);
      }}
      type="button"
      >
        Calculate
      </button>
    </form> 
  );
}

//condition for BMI. 
// if the BMI is less than 18.5, the person is underweight. 
// If the BMI is greater than or equal to 18.5 and less than 25, the person has a normal weight. 
// If the BMI is greater than or equal to 25 and less than 30, the person is overweight. 
// If the BMI is greater than or equal to 30, the person is obese.
