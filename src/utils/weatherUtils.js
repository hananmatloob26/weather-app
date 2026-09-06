export const celsiusToFahrenheit = (celsius) => {
  return Math.round((celsius * 9/5) + 32);
};

export const fahrenheitToCelsius = (fahrenheit) => {
  return Math.round((fahrenheit - 32) * 5/9);
};

export const formatTemperature = (temp, unit) => {
  if (unit === 'fahrenheit') {
    return `${celsiusToFahrenheit(temp)}°F`;
  }
  return `${Math.round(temp)}°C`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const formatDay = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'short' };
  return date.toLocaleDateString('en-US', options).toUpperCase();
};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = { hour: 'numeric', minute: '2-digit', hour12: true };
  return date.toLocaleTimeString('en-US', options);
};

export const getWeatherIcon = (weatherCode) => {
  const iconMap = {
    '01d': '☀️', // clear sky day
    '01n': '🌙', // clear sky night
    '02d': '⛅', // few clouds day
    '02n': '☁️', // few clouds night
    '03d': '☁️', // scattered clouds
    '03n': '☁️',
    '04d': '☁️', // broken clouds
    '04n': '☁️',
    '09d': '🌧️', // shower rain
    '09n': '🌧️',
    '10d': '🌧️', // rain day
    '10n': '🌧️', // rain night
    '11d': '⛈️', // thunderstorm
    '11n': '⛈️',
    '13d': '❄️', // snow
    '13n': '❄️',
    '50d': '🌫️', // mist
    '50n': '🌫️',
  };
  return iconMap[weatherCode] || '🌤️';
};

export const getWeatherCondition = (weatherCode) => {
  const conditionMap = {
    '01d': 'Clear',
    '01n': 'Clear',
    '02d': 'Partly Cloudy',
    '02n': 'Partly Cloudy',
    '03d': 'Cloudy',
    '03n': 'Cloudy',
    '04d': 'Overcast',
    '04n': 'Overcast',
    '09d': 'Showers',
    '09n': 'Showers',
    '10d': 'Rain',
    '10n': 'Rain',
    '11d': 'Thunderstorm',
    '11n': 'Thunderstorm',
    '13d': 'Snow',
    '13n': 'Snow',
    '50d': 'Mist',
    '50n': 'Mist',
  };
  return conditionMap[weatherCode] || 'Unknown';
};

export const getWeatherTheme = (weatherCode) => {
  if (weatherCode.includes('01') || weatherCode.includes('02')) {
    return 'sunny';
  } else if (weatherCode.includes('09') || weatherCode.includes('10')) {
    return 'rainy';
  } else if (weatherCode.includes('11')) {
    return 'stormy';
  } else if (weatherCode.includes('13')) {
    return 'snowy';
  } else if (weatherCode.includes('50')) {
    return 'foggy';
  }
  return 'cloudy';
};
