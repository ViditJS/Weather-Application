import React from "react";

// State Component
// class Form extends React.Component {
//
//   render() {
//     return (
//       <form onSubmit={this.props.getWeatherData}>
//       <input type="text" name="city" placeholder="city..."/>
//       <input type="text" name="country" placeholder="country..."/>
//       <button>getWeather< /button>
//       </form>
//     );
//   }
// };

// Stateless component
const Form = props => (
       <form onSubmit={props.getWeatherData}>
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="country" placeholder="country..."/>
        <button>getWeather< /button>
      </form>
)

export default Form;
