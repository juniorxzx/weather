import React from "react";
import { Container } from "./styles";
import WeatherCard from "./WeatherCard/WeatherCard";

interface WeatherTodayProps {
  data: CurrentWeather;
}

const WeatherToday = ({data}: WeatherTodayProps) => {
  return <Container>

    <WeatherCard data={data} />

  </Container>;
};

export default WeatherToday;
