import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import { getCurrentWeather, getForecast } from './services/weatherApi';
import './App.css';

function App() {
  const [city, setCity] = useState('Lahore');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('celsius');

  const fetchWeatherData = async (searchCity) => {
    setLoading(true);
    setError(null);

    try {
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(searchCity),
        getForecast(searchCity),
      ]);

      setWeather(weatherData);
      setForecast(forecastData);
      setCity(searchCity);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const handleSearch = (searchCity) => {
    fetchWeatherData(searchCity);
  };

  const handleUnitToggle = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div className="app">
      <Header unit={unit} onUnitToggle={handleUnitToggle} />
      
      <main className="main-content">
        <SearchBar onSearch={handleSearch} loading={loading} />

        {loading && <Loading />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && weather && (
          <>
            <CurrentWeather weather={weather} unit={unit} />
            <WeatherDetails weather={weather} />
            <Forecast forecast={forecast} unit={unit} />
          </>
        )}

        <footer className="footer">
          <p>Weather data provided by OpenWeather</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
