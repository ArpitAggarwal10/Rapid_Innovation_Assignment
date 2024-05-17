import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import styled from 'styled-components';

const ToggleButton = styled.button`
  padding: 10px;
  cursor: pointer;
  margin: 10px;
  background-color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  color: ${({ theme }) => (theme === 'light' ? '#fff' : '#000')};
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ToggleButton theme={theme} onClick={() => dispatch(toggleTheme())}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </ToggleButton>
  );
};

export default ThemeToggle;