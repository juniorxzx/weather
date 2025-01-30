import { PxToRem } from "@/utils/helpers/pxToRem";
import styled from "styled-components";

export const Container = styled.main`
  padding: 0 ${PxToRem(20)};
`;

export const ForecastContainer = styled.div`
  display: flex;
  width: 100%;
  gap: ${PxToRem(20)};
  justify-content: space-between;

  flex-direction: column;
`;
