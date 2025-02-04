import React from "react";
import {
  CardDetails,
  CardsDetails,
  Container,
  ContainerBody,
  ContainerHeader,
  HeaderIcon,
  HeaderTime,
  HeaderTitle,
  Temperature,
} from "./styles";
import { formatDays } from "@/utils/helpers/days";

import Clouds from "@/assets/weather/Clouds.jpg";
import Rain from "@/assets/weather/Rain.jpg";
import Clear from "@/assets/weather/Clear.jpg";
import Mist from "@/assets/weather/Mist.jpg";
import Thunderstorm from "@/assets/weather/Thunderstorm.jpg";
import Snow from "@/assets/weather/Snow.jpg";

interface WeatherCardProps {
  data: CurrentWeather;
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
      <ContainerHeader>
        <HeaderTitle>
          <HeaderIcon />
          <p>Como está o tempo?</p>
        </HeaderTitle>
        <HeaderTime>
          <h1>{formatDays(data.dt).split("-")[0]}</h1>
          <h3>{formatDays(data.dt).split("-")[1]}</h3>
        </HeaderTime>
      </ContainerHeader>

      <ContainerBody>
        <Temperature>{Math.round(data.temp)}°C</Temperature>
        <p>{data.weather[0].description}</p>

        <CardsDetails>
          <CardDetails>
            <h3>Sensação térmica</h3>
            <p>{data.feels_like}°C</p>
          </CardDetails>
          <CardDetails>
            <h3>Umidade</h3>
            <p>{data.humidity}%</p>
          </CardDetails>
          <CardDetails>
            <h3>Ventos</h3>
            <p>{data.wind_speed} km/h</p>
          </CardDetails>
        </CardsDetails>
      </ContainerBody>
    </Container>
  );
};

export default WeatherCard;
