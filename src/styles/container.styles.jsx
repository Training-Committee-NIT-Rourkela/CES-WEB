import styled from "styled-components";
import { theme } from "../config/theme";

// Base Container with common styles
const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
`;

// Dark-themed container (for Upload and UserProfile)
export const DarkContainer = styled(BaseContainer)`
  background-color: #1a1a1a;
`;

// Theme-based container (for SignUp and Login)
export const ThemedContainer = styled(BaseContainer)`
  background-color: ${theme.background};
  color: ${theme.text};
`;

// Dashboard has different flex-direction
export const DashboardContainer = styled(BaseContainer)`
  flex-direction: row;
  background-color: #1a1a1a;
`;