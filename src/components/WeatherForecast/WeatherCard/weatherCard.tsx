import React, { useEffect } from "react";
import {
  CardBody,
  CardBodyAdditional,
  CardBodyTitle,
  CardHeader,
  CardHeaderHour,
  CardHeaderTitle,
  Container,
  ContainerImage,
} from "./weathercard.styled";
import { formatDays } from "@/utils/helpers/days";

import Clouds from "@/assets/weather/Clouds.jpg";
import Rain from "@/assets/weather/Rain.jpg";
import Clear from "@/assets/weather/Clear.jpg";

interface WeatherCardProps {
  data: DailyWeather;
}
const weatherImages: Record<string, { src: string }> = {
  Clouds,
  Rain,
  Clear,
};

const WeatherCard = ({ data }: WeatherCardProps) => {
  const weatherType = data.weather[0].main;
  const weatherImage = weatherImages[weatherType]?.src || Clear.src;

  return (
    <Container $weather={weatherImage}>
      <CardHeader>
        <CardHeaderTitle>{formatDays(data.dt).split("-")[0]}</CardHeaderTitle>
        <CardHeaderHour>{formatDays(data.dt).split("-")[1]}</CardHeaderHour>
      </CardHeader>
      <CardBody>
        <CardBodyTitle>{data.temp.day}°</CardBodyTitle>
        <CardBodyAdditional>
          <h3>{data.weather[0].description}</h3>
          <p>Sensação térmica: {data.feels_like.day}°</p>
          <p>Umidade: {data.humidity}%</p>
          <p>Ventos: {data.wind_speed} km/h</p>
        </CardBodyAdditional>
      </CardBody>
    </Container>
  );
};

export default WeatherCard;
