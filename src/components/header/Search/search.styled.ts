import { PxToRem } from "@/utils/helpers/pxToRem";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${PxToRem(40)};
  border-radius: ${PxToRem(12)};
  background-color: ${({ theme }) => theme.colors.muted};
  padding: 0 ${PxToRem(4)};
`;

export const IconSearch = styled(MdSearch)`
  color: ${({ theme }) => theme.colors.text};
  height: ${PxToRem(24)};
  width: ${PxToRem(24)};
`;

export const Input = styled.input`
  display: flex;
  width: ${PxToRem(300)};
  background-color: transparent;
  border: none;
  padding: ${PxToRem(8)};
  outline: none;
  color: ${({ theme }) => theme.colors.text};
`;
