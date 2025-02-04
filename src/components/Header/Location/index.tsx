"use client";

import React, { useEffect, useState } from "react";
import { Location, LocationIcon, LocationText } from "./styles";
import { getGeoLocation } from "@/api/getGeoLocation/getGeoLocation.api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LocationCity = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [city, setCity] = useState<string>("");
  useEffect(() => {
    const getCity = async () => {
      try {
        const data = await getGeoLocation();
        if (data) {
          setLoading(false);
          setCity(data.city);
        }
      } catch (error) {
        console.log("Erro ao realizar busca pela cidade atual", error);
      }
    };

    getCity();
  }, []);

  if (loading) {
    return <Skeleton count={1}  height={20} width={100} />;
  }
  return (
    <Location>
      <LocationIcon />
      <LocationText>{city}</LocationText>
    </Location>
  );
};

export default LocationCity;
