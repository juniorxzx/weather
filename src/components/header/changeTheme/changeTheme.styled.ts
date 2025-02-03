import { PxToRem } from "@/utils/helpers/pxToRem";
import styled from "styled-components";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { motion } from "framer-motion";
export const ThemeContainer = styled.div`
  width: ${PxToRem(80)};
  height: ${PxToRem(40)};
  border-radius: ${PxToRem(12)};
  background-color: ${({ theme }) => theme.colors.muted};
  user-select: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow.default};
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${PxToRem(4)} ${PxToRem(8)};
`;

export const BoxMode = styled(motion.div)`
  padding: ${PxToRem(8)};
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: ${PxToRem(12)};
`;

export const MoonIcon = styled(LuMoon)`
  color: ${({ theme }) => theme.colors.text};
`;

export const SunIcon = styled(MdOutlineWbSunny)`
  color: ${({ theme }) => theme.colors.text};
`;
