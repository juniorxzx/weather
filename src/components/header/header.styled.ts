import { PxToRem } from "@/utils/pxToRem";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  height: ${PxToRem(60)};
  padding: 0 ${PxToRem(20)};
  justify-content: space-between;
`;
