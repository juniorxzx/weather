"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  Container,
  ContainerTitle,
  ForecastContainer,
} from "./weatherForecast.styled";
import WeatherCard from "./WeatherCard/weatherCard";

interface WeatherForecastProps {
  data: WeatherData;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ data }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Container>
      <ContainerTitle>Previsão do tempo para os próximos dias</ContainerTitle>

      <Carousel ref={carousel}>
        <ForecastContainer
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
        >
          {data.daily.map((day, index) => (
            <WeatherCard key={index} data={day} />
          ))}
        </ForecastContainer>
      </Carousel>
    </Container>
  );
};

export default WeatherForecast;
