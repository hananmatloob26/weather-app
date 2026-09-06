import { Droplets, Wind, Gauge, Eye, Sunrise, Sunset } from 'lucide-react';
import { formatTime } from '../utils/weatherUtils';
import WeatherDetailCard from './WeatherDetailCard';

const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const { main, wind, visibility, sys } = weather;

  return (
    <div className="weather-details">
      <h3 className="section-title">Weather Details</h3>
      <div className="details-grid">
        <WeatherDetailCard
          icon={<Droplets size={24} className="detail-icon-svg" />}
          label="Humidity"
          value={`${main.humidity}%`}
        />
        <WeatherDetailCard
          icon={<Wind size={24} className="detail-icon-svg" />}
          label="Wind Speed"
          value={`${Math.round(wind.speed * 3.6)} km/h`}
        />
        <WeatherDetailCard
          icon={<Gauge size={24} className="detail-icon-svg" />}
          label="Pressure"
          value={`${main.pressure} hPa`}
        />
        <WeatherDetailCard
          icon={<Eye size={24} className="detail-icon-svg" />}
          label="Visibility"
          value={`${(visibility / 1000).toFixed(1)} km`}
        />
        <WeatherDetailCard
          icon={<Sunrise size={24} className="detail-icon-svg" />}
          label="Sunrise"
          value={formatTime(sys.sunrise)}
        />
        <WeatherDetailCard
          icon={<Sunset size={24} className="detail-icon-svg" />}
          label="Sunset"
          value={formatTime(sys.sunset)}
        />
      </div>
    </div>
  );
};

export default WeatherDetails;
