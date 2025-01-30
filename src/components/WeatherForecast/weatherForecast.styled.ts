import { PxToRem } from "@/utils/helpers/pxToRem";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${PxToRem(16)};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ContainerTitle = styled.h1`
  font-size: ${PxToRem(24)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const Carousel = styled(motion.div)`
  display: flex;
  width: 100%;
  cursor: grab;
  overflow: hidden;
`;

export const ForecastContainer = styled(motion.div)`
  width: 100%;
  display: flex;

  gap: ${PxToRem(16)};
`;
