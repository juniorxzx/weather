"use client";

import { getGeoLocation } from "@/api/getGeoLocation/getGeoLocation.api";
import { getWeatherOneCall } from "@/api/openWeather/openWeather.api";
import { useEffect, useState } from "react";
import { Container } from "./home.styled";
import WeatherForecast from "@/components/WeatherForecast/weatherForecast";

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
      {weather ? <WeatherForecast data={weather} /> : <p>Carregando...</p>}
    </Container>
  );
}
