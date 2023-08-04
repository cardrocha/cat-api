import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#f5f5f5',
  secondary: '#000',
  nav: '#d1d1d1',
  secondaryNav: '#1e1e1e',
  border: '#c21808',
  button: '#af1607',
  hover: '#881106'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '640px'
}

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
}

body {
  background-color: ${colors.primary};
}

body.dark {
    background-color: ${colors.secondary};
    color: ${colors.primary};
}
`
