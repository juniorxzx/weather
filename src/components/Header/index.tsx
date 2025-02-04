"use client";

import React, { useEffect, useState } from "react";

import LocationCity from "./Location";
import ChangeTheme from "./ChangeTheme";
import Search from "./Search";
import { Container, Menu } from "./styles";

const Header = () => {
  return (
    <Container>
      <LocationCity />

      <Menu>
        {/* <Search /> */}
        <ChangeTheme />
      </Menu>
    </Container>
  );
};

export default Header;
