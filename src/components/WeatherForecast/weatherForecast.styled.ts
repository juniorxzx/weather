import { PxToRem } from "@/utils/helpers/pxToRem";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${PxToRem(16)};
`;

export const ContainerTitle = styled.h1`
  font-size: ${PxToRem(24)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  width: 100%;
`;

export const ForecastContainer = styled.div`
  display: flex;
  gap: ${PxToRem(16)};
`;
