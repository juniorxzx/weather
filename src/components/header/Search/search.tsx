"use client";

import React from "react";
import { IconSearch, Input, SearchContainer } from "./search.styled";

const Search = () => {
  return (
    <SearchContainer>
      <IconSearch />
      <Input type="text" placeholder="Digite o cep, cidade..." />
    </SearchContainer>
  );
};

export default Search;
