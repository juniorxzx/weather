"use client";

import React, { useEffect, useState } from "react";
import { Container, Menu } from "./header.styled";
import LocationCity from "./Location/location";
import ChangeTheme from "./ChangeTheme/changeTheme";
import Search from "./Search/search";

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
