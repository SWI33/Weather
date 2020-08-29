import React from "react";
import Card from "react-bootstrap/Card";
import Form from "./Form";
import "weather-icons/css/weather-icons.css";

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
      temp_max: undefined,
      temp_min: undefined,
      description: undefined,
      humidity: undefined,
      preassure: undefined,
      error: false,
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calFar(temp) {
    let f = Math.floor(((temp - 271.15) * 9) / 5 + 26);
    return f;
  }

  getWeather = async (e) => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (country && city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
      );

      const response = await api_call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        temp: this.calFar(response.main.temp),
        humidity: response.main.humidity,
        preassure: response.main.preassure,
        temp_max: this.calFar(response.main.temp_max),
        temp_min: this.calFar(response.main.temp_min),
        description: response.weather[0].description,
        error: false,
      });

      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

      console.log(response);
    } else {
      this.setState({
        error: true,
      });
    }
  };
  // Search Form
  render() {
    return (
      <div>
        <Form loadWeather={this.getWeather} />
        <Card style={{ backgroundColor: "transparent" }}>
          <Card.Body>
            <Card.Title className="text-center" style={{ color: "white" }}>
              <h4>{this.state.city}</h4>
            </Card.Title>
            <Card.Subtitle className="text-center" style={{ color: "white" }}>
              <h1>
                {this.state.temp}
                <h1 className={" wi wi-fahrenheit"}></h1>
              </h1>
              <p>
                {" "}
                {this.state.temp_min}&deg;- {this.state.temp_max}&deg;{" "}
              </p>
              <p>{this.state.humidity}%</p>
              <p>{this.state.preassure}</p>
            </Card.Subtitle>
            <Card.Text className="text-center" style={{ color: "white" }}>
              {this.state.description}
            </Card.Text>
            <Card.Text className="text-center" style={{ color: "white" }}>
              <i className={`wi ${this.state.icon} display-4`} />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Current;
