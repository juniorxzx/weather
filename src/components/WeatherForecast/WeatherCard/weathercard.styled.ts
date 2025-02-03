import { PxToRem } from "@/utils/helpers/pxToRem";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled(motion.div)<{ $weather: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.highlight};
  padding: ${PxToRem(20)};
  border-radius: 12px;
  width: 300px;
  height: 300px;
  min-width: 300px;
  box-shadow: ${({ theme }) => theme.shadow.default};
  user-select: none;
  cursor: pointer;

  background-image: url(${(props) => props.$weather});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContainerImage = styled(Image)``;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const CardHeaderTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
`;

export const CardHeaderHour = styled.h2`
  font-weight: 500;
  font-size: 20px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardBodyTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${PxToRem(48)};
`;

export const CardBodyAdditional = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${PxToRem(8)};
  & > h3 {
    font-size: ${PxToRem(16)};
    font-weight: 500;
    text-transform: capitalize;
    text-align: center;
    margin: ${PxToRem(8)} 0;
  }
`;
