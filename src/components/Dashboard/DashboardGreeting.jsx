import {
  CalendarDays,
  MapPin,
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  Snowflake,
  CloudLightning,
} from "lucide-react"

import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import apiInstance from "../../config/apiInstance"

const getWeatherInfo = (code) => {
  const weatherMap = {
    0: { condition: "Clear Sky", icon: Sun },
    1: { condition: "Mainly Clear", icon: Sun },
    2: { condition: "Partly Cloudy", icon: CloudSun },
    3: { condition: "Overcast", icon: Cloud },

    45: { condition: "Foggy", icon: CloudFog },
    48: { condition: "Foggy", icon: CloudFog },

    51: { condition: "Light Drizzle", icon: CloudDrizzle },
    53: { condition: "Drizzle", icon: CloudDrizzle },
    55: { condition: "Heavy Drizzle", icon: CloudDrizzle },
    56: { condition: "Freezing Drizzle", icon: CloudDrizzle },
    57: { condition: "Heavy Freezing Drizzle", icon: CloudDrizzle },

    61: { condition: "Light Rain", icon: CloudRain },
    63: { condition: "Rain", icon: CloudRain },
    65: { condition: "Heavy Rain", icon: CloudRain },
    66: { condition: "Freezing Rain", icon: CloudRain },
    67: { condition: "Heavy Freezing Rain", icon: CloudRain },

    71: { condition: "Light Snow", icon: Snowflake },
    73: { condition: "Snow", icon: Snowflake },
    75: { condition: "Heavy Snow", icon: Snowflake },
    77: { condition: "Snow Grains", icon: Snowflake },

    80: { condition: "Light Showers", icon: CloudRain },
    81: { condition: "Rain Showers", icon: CloudRain },
    82: { condition: "Heavy Showers", icon: CloudRain },

    85: { condition: "Snow Showers", icon: Snowflake },
    86: { condition: "Heavy Snow Showers", icon: Snowflake },

    95: { condition: "Thunderstorm", icon: CloudLightning },
    96: { condition: "Thunderstorm with Hail", icon: CloudLightning },
    99: { condition: "Heavy Thunderstorm", icon: CloudLightning },
  }

  return (
    weatherMap[code] || {
      condition: "Unknown",
      icon: Sun,
    }
  )
}

const getAQIStatus = (aqi) => {
  if (aqi == null) return "Unknown"

  if (aqi <= 50) return "Good"
  if (aqi <= 100) return "Moderate"
  if (aqi <= 150) return "Unhealthy for Sensitive Groups"
  if (aqi <= 200) return "Unhealthy"
  if (aqi <= 300) return "Very Unhealthy"

  return "Hazardous"
}

const DashboardGreeting = () => {
  const { user } = useAuth()

  const [currentTime, setCurrentTime] = useState(new Date())

  const [weather, setWeather] = useState(null)
  const [airQuality, setAirQuality] = useState(null)
  const [loadingWeather, setLoadingWeather] = useState(true)

  // -----------------------------
  // Live Date & Time
  // -----------------------------

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // -----------------------------
  // Weather + AQI
  // -----------------------------

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoadingWeather(true)

        const [weatherResponse, airQualityResponse] = await Promise.all([
          apiInstance.get("/weather/current"),
          apiInstance.get("/weather/air-quality"),
        ])

        setWeather(weatherResponse.data.weather)

        setAirQuality(airQualityResponse.data.airQuality)
      } catch (error) {
        console.error("Failed to fetch weather data:", error)
      } finally {
        setLoadingWeather(false)
      }
    }

    fetchWeatherData()
  }, [])

  // -----------------------------
  // Date & Time Formatting
  // -----------------------------

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  const name = user.fullName.trim().split(" ")[0]

  // -----------------------------
  // Dynamic Weather Information
  // -----------------------------

  const weatherInfo = getWeatherInfo(weather?.weatherCode)

  const WeatherIcon = weatherInfo.icon

  const aqiStatus = getAQIStatus(airQuality?.aqi)

  return (
    <div className="flex w-full items-center justify-between gap-8">
      {/* =========================
          LEFT SECTION
      ========================= */}

      <div className="min-w-0">
        <h1 className="text-4xl font-bold text-white lg:text-5xl">
          Good Morning,
          <span className="text-[#b8c4ff]"> {name} 👋</span>
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-6 text-[#8e909f]">
          {/* Date */}

          <div className="flex items-center gap-2">
            <CalendarDays
              size={18}
              className="text-[#b8c4ff]"
            />

            <span className="text-sm">
              {formattedDate} • {formattedTime}
            </span>
          </div>

          {/* Location */}

          <div className="flex items-center gap-2">
            <MapPin
              size={18}
              className="text-[#4edea3]"
            />

            <span className="text-sm">
              {user.location.city}, {user.location.state}
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          WEATHER CARD
      ========================= */}

      <div
        className="
          flex
          shrink-0
          items-center
          gap-4
          rounded-full
          border
          border-white/10
          bg-[#171f33]/50
          px-6
          py-3
          backdrop-blur-xl
        "
      >
        {/* Weather Icon */}

        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#4edea3]/10
          "
        >
          <WeatherIcon
            size={24}
            className="text-[#4edea3]"
          />
        </div>

        {/* Weather Information */}

        <div className="min-w-[210px]">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#8e909f]
            "
          >
            Weather
          </p>

          {loadingWeather ? (
            <p className="mt-1 font-semibold text-white">Loading...</p>
          ) : (
            <div className="mt-1">
              {/* Temperature + Condition */}

              <p className="font-semibold text-white">
                {weather?.temperature ?? "--"}°C
                <span className="mx-2 text-[#555d72]">•</span>
                {weatherInfo.condition}
              </p>

              {/* AQI */}

              <p className="mt-0.5 text-xs text-[#8e909f]">
                AQI <span className="font-semibold text-white">{airQuality?.aqi ?? "--"}</span>
                <span className="mx-1">•</span>
                {aqiStatus}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardGreeting
