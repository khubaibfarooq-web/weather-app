import React, { useEffect, useRef, useState } from "react";
import clear_icon from "../../assets/images/clear.png";

const Home = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for user location fetch

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
  };

  // Fetch current weather
  const fetchWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log("WWW data.......", data);
      const icons = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        icon: icons,
        location: data.name,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        temperature: Math.floor(data.main.temp),
      });
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  // Fetch forecast data
  const fetchForecast = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`;

      const response = await fetch(url);
      const data = await response.json();

      // Process forecast data to show only 12:00 PM entries
      const processedForecast = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecastData(processedForecast);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  // Fetch city name from coordinates
  const fetchCityFromCoordinates = async (latitude, longitude) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`;

      const response = await fetch(url);
      const data = await response.json();
      const city = data.name;

      // Fetch weather and forecast for the detected city
      fetchWeather(city);
      fetchForecast(city);
    } catch (error) {
      console.error("Error fetching city from coordinates:", error);
      setLoading(false);
    }
  };

  // Get user's location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCityFromCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching user location:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  // Handle city search
  const handleSearch = () => {
    const city = inputRef.current.value;
    if (city === "") {
      alert("please enter the data");
    }
    if (city) {
      fetchWeather(city);
      fetchForecast(city);
    }
  };

  // Fetch user location on component mount
  // Fetch weather and forecast every minute
  useEffect(() => {
    getUserLocation();

    // Set up interval for auto-updating weather and forecast
    const intervalId = setInterval(() => {
      if (weatherData?.location) {
        fetchWeather(weatherData.location);
        fetchForecast(weatherData.location);
      }
    }, 60000); // 1 minute interval (60000ms)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [weatherData?.location]); // Re-run when location changes

  return (
    <div>
      {/* Show loading state */}
      {loading ? (
        <p>Loading weather data for your location...</p>
      ) : (
        <>
          {/* Search Weather Input */}
          <div className="search-section">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search city weather"
              className="border p-2 rounded"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white p-2 rounded ml-2"
            >
              Search
            </button>
          </div>

          {/* Weather Section */}
          <div className="weather-section mt-4">
            <h2>Current Weather</h2>
            <ul>
              <li className="flex gap-[10px]">
                <label>Location:</label>
                <span>{weatherData?.location}</span>
              </li>
              <li className="flex gap-[10px]">
                <label>Temperature:</label>
                <span>{weatherData?.temperature}°C</span>
              </li>
              <li className="flex gap-[10px]">
                <label>Wind Speed:</label>
                <span>{weatherData?.windSpeed} m/s</span>
              </li>
              <li className="flex gap-[10px]">
                <label>Humidity:</label>
                <span>{weatherData?.humidity}%</span>
              </li>
              <li className="flex gap-[10px]">
                <label>Icon:</label>
                {weatherData?.icon && (
                  <img
                    src={weatherData?.icon}
                    alt="Weather icon"
                    style={{ width: 40, height: 40 }}
                  />
                )}
              </li>
            </ul>
          </div>

          {/* Forecast Section */}
          <div className="forecast-section mt-4">
            <h2>5-Day Forecast</h2>
            <ul>
              {forecastData.map((forecast, index) => (
                <li key={index} className="flex gap-[10px] items-center">
                  <span>{new Date(forecast.dt_txt).toLocaleDateString()}</span>
                  <span>{Math.floor(forecast.main.temp)}°C</span>
                  <img
                    src={allIcons[forecast.weather[0].icon] || clear_icon}
                    alt="Forecast icon"
                    style={{ width: 40, height: 40 }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
