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
} from "./styles";
import { formatDays } from "@/utils/helpers/days";

import Clouds from "@/assets/weather/Clouds.jpg";
import Rain from "@/assets/weather/Rain.jpg";
import Clear from "@/assets/weather/Clear.jpg";
import Mist from "@/assets/weather/Mist.jpg";
import Thunderstorm from "@/assets/weather/Thunderstorm.jpg";
import Snow from "@/assets/weather/Snow.jpg";
interface WeatherCardProps {
  data: DailyWeather;
}
const weatherImages: Record<string, { src: string }> = {
  Clouds,
  Rain,
  Clear,
  Mist,
  Thunderstorm,
  Snow
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
        <CardBodyTitle>{Math.round(data.temp.day)}°</CardBodyTitle>
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
