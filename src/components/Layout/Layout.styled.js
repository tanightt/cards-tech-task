import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const LayoutList = styled.header`
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 2px solid #737cb2;
  background-color: #b0a6e9;
  ul {
    padding: 10px 0;
    display: flex;
    gap: 30px;
  }
  li {
    list-style: none;
  }
  a {
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
  }
`;

export const NavItem = styled(NavLink)`
  &.active {
    color: #a339dc;
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: #a339dc;
    text-decoration: underline;
  }
`;
