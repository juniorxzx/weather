"use client";

import React, { useEffect, useState } from "react";
import { Container } from "./header.styled";

import { getGeoLocation } from "@/api/getGeoLocation/getGeoLocation.api";
import LocationCity from "./location/location";
import ChangeTheme from "./changeTheme/changeTheme";

const Header = () => {
  return (
    <Container>
      <LocationCity />

      <ChangeTheme />
    </Container>
  );
};

export default Header;
