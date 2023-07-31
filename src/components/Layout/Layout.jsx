import { Outlet } from "react-router-dom";
import { LayoutList, NavItem } from "./Layout.styled";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <LayoutList>
        <nav>
          <ul>
            <li>
              <NavItem to="/">Home</NavItem>
            </li>
            <li>
              <NavItem to="/tweets">Tweets</NavItem>
            </li>
          </ul>
        </nav>
      </LayoutList>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
