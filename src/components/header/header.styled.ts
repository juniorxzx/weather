import { PxToRem } from "@/utils/helpers/pxToRem";

import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  height: ${PxToRem(60)};
  padding: 0 ${PxToRem(20)};
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: ${PxToRem(20)};
`;
