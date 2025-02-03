"use client";

import { getGeoLocation } from "@/api/getGeoLocation/getGeoLocation.api";
import { getWeatherOneCall } from "@/api/openWeather/openWeather.api";
import { useEffect, useState } from "react";
import { Container, ForecastContainer } from "./dashboard.styled";
import WeatherForecast from "@/components/WeatherForecast";
import WeatherToday from "@/components/WeatherToday";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData>();
  
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { lat, lon } = await getGeoLocation();
        const data = await getWeatherOneCall(
          lat,
          lon,
          "minutely,hourly",
          "metric",
          "pt_br"
        );
        setWeather(data);
      } catch (err: any) {
        console.log(err.message);
      }
    };

    fetchWeather();
  }, []);
  return (
    <Container>
      <ForecastContainer>
        {weather ? (
          <WeatherToday data={weather.current} />
        ) : (
          <p>Carregando...</p>
        )}
        {weather ? <WeatherForecast data={weather} /> : <p>Carregando...</p>}
      </ForecastContainer>
    </Container>
  );
}
