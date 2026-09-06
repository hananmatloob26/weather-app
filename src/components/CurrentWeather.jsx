import { getWeatherIcon, getWeatherCondition, formatTemperature, formatDate, getWeatherTheme } from '../utils/weatherUtils';

const CurrentWeather = ({ weather, unit }) => {
  if (!weather) return null;

  const { name, sys, main, weather: weatherData, dt } = weather;
  const weatherIcon = getWeatherIcon(weatherData[0].icon);
  const condition = getWeatherCondition(weatherData[0].icon);
  const temp = formatTemperature(main.temp, unit);
  const feelsLike = formatTemperature(main.feels_like, unit);
  const date = formatDate(dt * 1000);
  const theme = getWeatherTheme(weatherData[0].icon);

  return (
    <div className={`current-weather ${theme}`}>
      <div className="location-info">
        <h2 className="city-name">
          {name}, {sys.country}
        </h2>
        <p className="current-date">{date}</p>
      </div>

      <div className="weather-main">
        <div className="weather-icon-large">{weatherIcon}</div>
        <div className="temperature-display">
          <span className="temperature">{temp}</span>
          <span className="condition">{condition}</span>
        </div>
      </div>

      <div className="feels-like">
        <p>Feels like {feelsLike}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
