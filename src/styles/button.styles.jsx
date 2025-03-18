import styled from "styled-components";
import { theme } from "../config/theme";

export const BaseButton = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

export const DarkButton = styled(BaseButton)`
  padding: 10px;
  margin: 10px;
  background-color: #333;
  
  &:hover {
    background-color: #444;
  }
`;

export const ThemedButton = styled(BaseButton)`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  background: ${theme.primary};
  font-weight: bold;
  
  &:hover {
    background: ${theme.secondary};
  }
`;