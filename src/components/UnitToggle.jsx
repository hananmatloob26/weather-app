const UnitToggle = ({ unit, onUnitToggle }) => {
  return (
    <div className="unit-toggle">
      <button
        className={`unit-button ${unit === 'celsius' ? 'active' : ''}`}
        onClick={() => onUnitToggle('celsius')}
        aria-label="Switch to Celsius"
      >
        °C
      </button>
      <button
        className={`unit-button ${unit === 'fahrenheit' ? 'active' : ''}`}
        onClick={() => onUnitToggle('fahrenheit')}
        aria-label="Switch to Fahrenheit"
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle;
