import { PxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ThemeContainer = styled.div`
  width: ${PxToRem(120)};
  height: ${PxToRem(40)};
  border-radius: ${PxToRem(12)};
  background-color: ${({ theme }) => theme.colors.muted};
  user-select: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
`;
