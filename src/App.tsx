import React from 'react';
import RouterApp from './Routes/main.route';
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  palette:{
    background:{
      
    },
    
  },
  typography: {
    fontSize: 14, //16px
    fontFamily: ["Prompt",'sans-seri'].join(","),
    fontWeightBold:"600",
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterApp />
    </ThemeProvider>
  );
}

export default App;
