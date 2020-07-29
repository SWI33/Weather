import React from "react";
import Card from "react-bootstrap/Card";

const API_key = "9f4774fcfe621d4f45c7528f63ebcf9d";

class Current extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      temp: undefined,
      main: undefined,
      temp: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
    };
    this.getWeather();
  }

  calFar(temp) {
    let f = Math.floor((( temp - 271.15) * 9/5) + 32)
    return f;
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`
    );

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      temp: this.calFar(response.main.temp),
      description: response.weather[0].description,
      temp_min:  this.calFar(response.main.temp_min),
      temp_max:  this.calFar(response.main.temp_max)
    });
  };
  render() {
    return (
      <Card style={{ backgroundColor: "transparent" }}>
        <Card.Body>
          <Card.Title className="text-center" style={{ color: "white" }}>
            <h4>
              {this.state.city},{this.state.country}
            </h4>
          </Card.Title>
          <Card.Subtitle className="text-center" style={{ color: "white" }}>
    <h1>{this.state.temp}&deg;F</h1>
    <p> {this.state.temp_min}&deg;- {this.state.temp_max}&deg; </p>
          </Card.Subtitle>
          <Card.Text className="text-center" style={{ color: "white" }}>
           {this.state.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Current;
