const WeatherDetailCard = ({ icon, label, value }) => {
  return (
    <div className="weather-detail-card">
      <div className="detail-icon">{icon}</div>
      <div className="detail-info">
        <p className="detail-label">{label}</p>
        <p className="detail-value">{value}</p>
      </div>
    </div>
  );
};

export default WeatherDetailCard;
