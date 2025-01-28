"use client";

import { getGeoLocation } from "@/api/getGeoLocation/getGeoLocation.api";
import { getWeatherOneCall } from "@/api/openWeather/openWeather.api";
import { useEffect, useState } from "react";
import { Container } from "./home.styled";
import Header from "@/components/header/header";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
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
        console.log(data);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        console.log("Finalizado");
      }
    };

    fetchWeather();
  }, []);
  return (
    <Container>
      <Header />
      <h1>Home</h1>
    </Container>
  );
}
