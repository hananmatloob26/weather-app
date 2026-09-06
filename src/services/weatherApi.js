const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found');
      }
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
};

export const getForecast = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found');
      }
      throw new Error('Failed to fetch forecast data');
    }

    const data = await response.json();
    
    // Process forecast data to get one reading per day (at noon)
    const dailyForecast = {};
    data.list.forEach((item) => {
      const date = item.dt_txt.split(' ')[0];
      const hour = parseInt(item.dt_txt.split(' ')[1].split(':')[0]);
      
      if (!dailyForecast[date] || Math.abs(hour - 12) < Math.abs(dailyForecast[date].hour - 12)) {
        dailyForecast[date] = {
          date: date,
          hour: hour,
          temp: item.main.temp,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          humidity: item.main.humidity,
          wind_speed: item.wind.speed,
          weather: item.weather[0],
        };
      }
    });

    // Convert to array and take next 5 days
    const forecastArray = Object.values(dailyForecast).slice(0, 5);
    return forecastArray;
  } catch (error) {
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
};
