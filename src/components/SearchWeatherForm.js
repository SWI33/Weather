import React from "react";
import { Button } from "react-bootstrap";

const Srch = (props) => {
  return (
    <div className="containter">
      <div className="row">
        <div className="col-md-3">
          <input type="text" className="form-control" name="city" placeholder="City" />
        </div>
        <div className="col-md-3"></div>
        <input type="text" className="form-control" name="country" placeholder="Country" />
        <div className="col-md-3"></div>
        <Button color="outline-light">Search Location</Button>
      </div>
    </div>
  );
};

export default Srch;
