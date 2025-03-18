import styled from "styled-components";
import { theme } from "../config/theme";

export const DarkCard = styled.div`
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;

export const ThemedCard = styled.div`
  background: ${theme.cardBackground};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
`;