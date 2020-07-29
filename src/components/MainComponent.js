import React from "react";
import NavComponent from "./NavbarComponent";
import { Navbar } from "react-bootstrap";
import Cards from './CardComponents'
import Current from './CurrentWeather'
import Srch from './SearchWeatherForm'

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavComponent />
        <Srch />
        <Current  />
        <Cards />


      </div>
    );
  }
}
export default Main;
