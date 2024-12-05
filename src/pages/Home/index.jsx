import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import search_icon from "../../assets/images/search.png";
import clear_icon from "../../assets/images/clear.png";
import cloud_icon from "../../assets/images/cloud.png";
import drizzle_icon from "../../assets/images/drizzle.png";
import rain_icon from "../../assets/images/rain.png";
import snow_icon from "../../assets/images/snow.png";
import wind_icon from "../../assets/images/wind.png";
import humidity_icon from "../../assets/images/humidity.png";

import vision from "../../assets/images/shared-vision.png";
import humidity from "../../assets/images/weather.png";
import winds from "../../assets/images/winds.png";

const Home = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locationSearch, setLocationSearch] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const convertToReadableTime = (timestamp, timezone) => {
    return dayjs.unix(timestamp + timezone).format("hh:mm A");
  };

  const fetchWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log("weather data", data);
      const icons = allIcons[data.weather[0].icon] || clear_icon;
      const sunrise = convertToReadableTime(data.sys.sunrise, data.timezone);
      const sunset = convertToReadableTime(data.sys.sunset, data.timezone);
      const visibility = data.visibility / 1000;

      setWeatherData({
        sunset,
        sunrise,
        icon: icons,
        visibility,
        weather: data.weather[0].main,
        location: data.name,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        feel: Math.floor(data.main.feels_like),
        temperature: Math.floor(data.main.temp),
      });
      setLoading(false);
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

      const processedForecast = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecastData(processedForecast);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

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

  const handleSearch = () => {
    const city = inputRef.current.value;
    if (city === "") {
      alert("Please enter the data");
    }
    if (city) {
      fetchWeather(city);
      fetchForecast(city);
      setLocationSearch(true);
    }
  };

  const getRelativeDay = (date) => {
    const now = dayjs();
    const targetDay = dayjs(date);

    if (targetDay.isSame(now, "day")) {
      return "Today";
    } else if (targetDay.isSame(now.subtract(1, "day"), "day")) {
      return "Yesterday";
    } else if (targetDay.isSame(now.add(1, "day"), "day")) {
      return "Tomorrow";
    } else {
      return targetDay.format("ddd");
    }
  };

  useEffect(() => {
    if (!locationSearch) {
      getUserLocation();
    }

    const intervalId = setInterval(() => {
      if (weatherData?.location) {
        fetchWeather(weatherData.location);
        fetchForecast(weatherData.location);
      }
    }, 60000);

    return () => clearInterval(intervalId);
  }, [weatherData?.location, locationSearch]);

  return (
    <section className="h-">
      <div className="mx-auto container">
        <div className="flex justify-between mb-[20px] mt-[30px]">
          <div>
            <p className="text-white text-[30px]">Good Morning Jhon Doe !</p>
          </div>
          {/* Search Weather Input */}
          <div class="relative">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              type="text"
              ref={inputRef}
              placeholder="Search Places...."
              className="w-96 pl-10 pr-4 py-2 rounded-full border border-white text-white bg-transparent placeholder-white focus:outline-none"
            />
            <span
              onClick={handleSearch}
              className="absolute inset-y-0 left-3 flex items-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-y-[15px]">
          <div className="w-full md:w-2/5  px-[10px] flex flex-col">
            <div className="bg-primary rounded-[15px] p-[15px] pb-[30px] flex-grow ">
              <div className="flex items-center justify-between">
                <h3 className="text-black text-[28px]">Today</h3>
                <span className="flex gap-[10px] items-center">
                  <i className="fa fa-map-marker"></i>
                  {weatherData?.location}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <img src={weatherData?.icon} alt="Weather icon" />
                <h3 className="text-[64px]">{weatherData?.temperature}°C</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-black text-[28px]">
                  {weatherData?.weather}
                </h3>
                <p>Feels like {weatherData?.feel}°C</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5  px-[10px] flex flex-col">
            <div className="bg-primary rounded-[15px] p-[20px] flex-grow">
              <h3 className="text-black text-[28px] mb-[20px]">
                Today's Highlight
              </h3>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 px-[15px]">
                  <div className="flex flex-col gap-[10px] p-[15px] bg-white flex-grow items-center rounded-[15px]">
                    <div className="text-center">
                      <label className="text-grey">wind status</label>
                      <img
                        src={winds}
                        alt="vision"
                        className="max-w-[100px] max-h-[100px] my-[20px]"
                      />
                    </div>
                    <span>{weatherData?.windSpeed} m/s</span>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-[15px]">
                  <div className="flex flex-col gap-[10px] p-[15px] bg-white flex-grow items-center rounded-[15px]">
                    <div className="text-center">
                      <label className="text-grey">humidity</label>
                      <img
                        src={humidity}
                        alt="vision"
                        className="max-w-[100px] max-h-[100px] my-[20px]"
                      />
                    </div>
                    <span>{weatherData?.humidity}%</span>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-[15px]">
                  <div className="flex flex-col gap-[10px] p-[15px] bg-white flex-grow items-center rounded-[15px]">
                    <div className="text-center">
                      <label className="text-grey">visibility</label>
                      <img
                        src={vision}
                        alt="vision"
                        className="max-w-[100px] max-h-[100px] my-[20px]"
                      />
                    </div>
                    <span>{weatherData?.visibility}Km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-primary rounded-[15px] p-[20px] flex-grow">
              <h3 className="text-black text-[28px] mb-[20px]">This Week</h3>
              <div className="flex flex-wrap">
                {forecastData.map((forecast, index) => (
                  <div className="w-full md:w-1/5 px-[15px]">
                    <div
                      key={index}
                      className="flex flex-col gap-[10px] p-[15px] bg-white flex-grow items-center rounded-[15px]"
                    >
                      <span>{getRelativeDay(forecast.dt_txt)}</span>{" "}
                      {/* Using the relative day function */}
                      <span>{Math.floor(forecast.main.temp)}°C</span>
                      <img
                        src={allIcons[forecast.weather[0].icon] || clear_icon}
                        alt="Forecast icon"
                        style={{ width: 200, height: 200 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div className="hidden">
    //   {/* Show loading state */}
    //   {loading ? (
    //     <p>Loading weather data for your location...</p>
    //   ) : (
    //     <>
    //       {/* Search Weather Input */}
    //       <div className="search-section">
    //         <input
    //           ref={inputRef}
    //           type="text"
    //           placeholder="Search city weather"
    //           className="border p-2 rounded"
    //         />
    //         <button
    //           onClick={handleSearch}
    //           className="bg-blue-500 text-white p-2 rounded ml-2"
    //         >
    //           Search
    //         </button>
    //       </div>

    //       {/* Weather Section */}
    //       <div className="weather-section mt-4">
    //         <h2>Current Weather</h2>
    //         <ul>
    //           <li className="flex gap-[10px]">
    //             <label>Location:</label>
    //             <span>{weatherData?.location}</span>
    //           </li>
    //           <li className="flex gap-[10px]">
    //             <label>Temperature:</label>
    //             <span>{weatherData?.temperature}°C</span>
    //           </li>
    //           <li className="flex gap-[10px]">
    //             <label>Wind Speed:</label>
    //             <span>{weatherData?.windSpeed} m/s</span>
    //           </li>
    //           <li className="flex gap-[10px]">
    //             <label>Humidity:</label>
    //             <span>{weatherData?.humidity}%</span>
    //           </li>
    //           <li className="flex gap-[10px]">
    //             <label>Feels Like:</label>
    //             <span>{weatherData?.feel}°C</span>
    //           </li>
    //           <li className="flex gap-[10px]">
    //             <label>Sunrise:</label>
    //             <span>{weatherData?.sunrise}</span>
    //           </li>
    //           <li className="flex gap-[10px]">
    //             <label>Sunset:</label>
    //             <span>{weatherData?.sunset}</span>
    //           </li>
    //           <li className="flex gap-[10px]">
    //             <label>Visibility:</label>
    //             <span>{weatherData?.visibility}Km</span>
    //           </li>
    //           <li className="flex gap-[10px]">
    //             <label>Icon:</label>
    //             {weatherData?.icon && (
    //               <img
    //                 src={weatherData?.icon}
    //                 alt="Weather icon"
    //                 style={{ width: 40, height: 40 }}
    //               />
    //             )}
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Forecast Section */}
    //       <div className="forecast-section mt-4">
    //         <h2>5-Day Forecast</h2>
    //         <ul>
    //           {forecastData.map((forecast, index) => (
    //             <li key={index} className="flex gap-[10px] items-center">
    //               <span>{getRelativeDay(forecast.dt_txt)}</span>{" "}
    //               {/* Using the relative day function */}
    //               <span>{Math.floor(forecast.main.temp)}°C</span>
    //               <img
    //                 src={allIcons[forecast.weather[0].icon] || clear_icon}
    //                 alt="Forecast icon"
    //                 style={{ width: 40, height: 40 }}
    //               />
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
};

export default Home;
