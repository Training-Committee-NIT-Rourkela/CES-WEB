import styled from "styled-components";

export const SidebarItem = styled.div`
  padding: 15px;
  margin: 10px 0;
  cursor: pointer;
  background-color: #333;
  border-radius: 5px;

  &:hover {
    background-color: #444;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #222;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;