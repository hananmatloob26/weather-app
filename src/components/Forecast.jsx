import ForecastCard from './ForecastCard';

const Forecast = ({ forecast, unit }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="forecast">
      <h3 className="section-title">5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.map((day, index) => (
          <ForecastCard key={`${day.date}-${index}`} data={day} unit={unit} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
