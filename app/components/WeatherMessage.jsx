var React = require('react');

var WeatherMessage = ({loc, temp}) => {
  return(
    <h3>It is {temp} in {loc}.</h3>
  )
};

module.exports = WeatherMessage;
