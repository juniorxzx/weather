import { PxToRem } from "@/utils/helpers/pxToRem";
import Image from "next/image";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";
export const Location = styled.div`
  display: flex;
  gap: ${PxToRem(4)};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const LocationIcon = styled(IoLocationOutline)`
  color: ${({ theme }) => theme.colors.text};
  width: ${PxToRem(18)};
  height: ${PxToRem(18)};
`;

export const LocationText = styled.h4`
  font-weight: 600;
  font-size: ${PxToRem(18)};

  color: ${({ theme }) => theme.colors.text};
`;
