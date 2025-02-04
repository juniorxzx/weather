import React from "react";
import { Container } from "./styles";
import Skeleton from "react-loading-skeleton";

const LoadingSkeleon = () => {
  return (
    <Container>
      <Skeleton width={200} height={200} />
    </Container>
  );
};

export default LoadingSkeleon;
