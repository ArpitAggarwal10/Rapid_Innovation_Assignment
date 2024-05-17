import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import TaskPage from './components/TaskPage';
import LandingPage from './components/LandingPage';
import styled, { ThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  background: '#333333',
  color: '#ffffff',
};

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
  transition: all 0.3s;
`;

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContainer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;