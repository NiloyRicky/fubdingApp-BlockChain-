"use client";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import themes from "./Theme"; // ✅ lowercased filename to match the actual file
import { useState } from "react";
import Header from "./Header";
import { createContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x:hidden;
  }
`;

const LayoutWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
`;

const ThemeToggleContext=createContext()

const Layout = ({children}) => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
   <div>
     <ThemeToggleContext.Provider
    value={{toggleTheme,themeMode}}>
    <ThemeProvider theme={themes[themeMode]}>
      <ToastContainer/>
      <GlobalStyle />
      <LayoutWrapper >
        <Header/>
        {children}
      </LayoutWrapper>
    </ThemeProvider>
    </ThemeToggleContext.Provider>
   </div>
  );
};

export default Layout;
export {ThemeToggleContext};
