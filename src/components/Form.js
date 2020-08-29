import React from "react";
import {Button} from 'reactstrap'

const Form = props => {
  return (
        <div className="containter">
          <form onSubmit={props.loadWeather}>
            <div className="row justify-content-center">
              <input
                type="text"
                className="form-control col-2"
                name="city"
                placeholder="City..."
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              />

              <input
                type="text"
                className="form-control col-2"
                name="country"
                placeholder="Country(US)..."
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              />
              <Button color="outline-light">Search Location</Button>
            </div>
          </form>
          </div>
  )};
const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
