import { getWeatherIcon, getWeatherCondition, formatTemperature, formatDay } from '../utils/weatherUtils';

const ForecastCard = ({ data, unit }) => {
  const { date, temp, temp_min, temp_max, weather } = data;
  const day = formatDay(date);
  const icon = getWeatherIcon(weather.icon);
  const condition = getWeatherCondition(weather.icon);
  const highTemp = formatTemperature(temp_max, unit);
  const lowTemp = formatTemperature(temp_min, unit);

  return (
    <div className="forecast-card">
      <p className="forecast-day">{day}</p>
      <div className="forecast-icon">{icon}</div>
      <p className="forecast-condition">{condition}</p>
      <div className="forecast-temps">
        <span className="forecast-high">{highTemp}</span>
        <span className="forecast-low">{lowTemp}</span>
      </div>
    </div>
  );
};

export default ForecastCard;
