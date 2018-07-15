import React from "react";
import Titles from "./component/Titles";
import Form from "./component/Form";
import Wheather from "./component/Wheather";


const API_KEY = "902687046148854d7217c3b59a1f7ce2";


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  // e - event object
  getWeather = async (e) => {
    // to prevent default page load
  e.preventDefault();

    // city.value and country.value  comes from Form.js
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      })
      console.log(data);
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the city name and country name",
      })
    }

  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
              <div className="row">
                <div className="col-5 title-container">
                  <Titles/>
                </div>
                <div className="col-7 form-container">
                  <Form getWeatherData = {this.getWeather}/>
                  <Wheather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
};
export default App;
