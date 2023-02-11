import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import AboutPage from '../../Features/About/AboutPage';
import Catalog from '../../Features/Catalog/Catalog';
import ProductDetails from '../../Features/Catalog/ProductDetails';
import ContactPage from '../../Features/Contact/ContactPage';
import HomePage from '../../Features/Home/HomePage';
import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/catalog' component={Catalog}/>
        <Route path='/catalog/:id' component={ProductDetails}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/contact' component={ContactPage}/>
      </Container>
      <div ></div>
    </ThemeProvider>
  );
}

export default App;
