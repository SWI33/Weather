import React from "react";
import NavComponent from "./NavbarComponent";
import Current from "./CurrentWeather";

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavComponent />
        <Current />
      </div>
    );
  }
}
export default Main;
