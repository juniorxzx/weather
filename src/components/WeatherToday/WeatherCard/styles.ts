import { PxToRem } from "@/utils/helpers/pxToRem";
import styled from "styled-components";
import { TiWeatherPartlySunny } from "react-icons/ti";
export const Container = styled.div<{ $weather: string }>`
  max-width: ${PxToRem(600)};
  max-height: ${PxToRem(300)};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.highlight};
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: ${PxToRem(12)};
  padding: ${PxToRem(16)};

  user-select: none;
  cursor: pointer;

  background-image: url(${(props) => props.$weather});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  gap: ${PxToRem(8)};
  align-items: center;
  color: ${({ theme }) => theme.colors.highlight};
  & > p {
    font-size: ${PxToRem(24)};
    font-weight: 600;
  }
`;

export const HeaderIcon = styled(TiWeatherPartlySunny)`
  color: ${({ theme }) => theme.colors.highlight};
  height: ${PxToRem(24)};
  width: ${PxToRem(24)};
`;

export const HeaderTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContainerBody = styled.div`
  & > p {
    font-size: ${PxToRem(18)};
    text-transform: capitalize;
  }
`;

export const Temperature = styled.h1`
  font-size: ${PxToRem(48)};
  font-weight: 600;
`;

export const CardsDetails = styled.div`
  margin-top: ${PxToRem(24)};

  display: flex;
  justify-content: space-between;
  gap: ${PxToRem(16)};
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${PxToRem(8)};
  width: ${PxToRem(200)};
  height: ${PxToRem(100)};
  background: ${({ theme }) => theme.colors.gradient};
  box-shadow: ${({ theme }) => theme.shadow.inner};
  border-radius: ${PxToRem(8)};
  padding: ${PxToRem(8)};
  justify-content: center;
  align-items: center;
`;

export const CardDetailsTemp = styled.h2``;
