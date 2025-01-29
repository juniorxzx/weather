import React from "react";
import {
  Container,
  ContainerTitle,
  ForecastContainer,
} from "./weatherForecast.styled";
import WeatherCard from "./WeatherCard/weatherCard";

interface WeatherForecastProps {
  data: WeatherData;
}

const WeatherForecast = ({ data }: WeatherForecastProps) => {
  return (
    <Container>
      <ContainerTitle>Previsão do tempo para os proximos dias</ContainerTitle>

      <ForecastContainer>
        {data.daily.map((day, index) => (
          <WeatherCard key={index} data={day} />
        ))}
      </ForecastContainer>
    </Container>
  );
};

export default WeatherForecast;
