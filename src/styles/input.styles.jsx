import styled from "styled-components";
import { theme } from "../config/theme";

export const DarkInput = styled.input`
  padding: 10px;
  margin: 8px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: white;
  width: 250px;
`;

export const ThemedInput = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  background: ${theme.inputBackground};
  border: 1px solid ${theme.borderColor};
  color: ${theme.text};
  border-radius: 5px;
`;