const config = {
    /*locales: [
      'de', // Falls du die Sprache ändern willst
    ],*/
    theme: {
      colors: {
        primary100: '#FFFFFF',
        primary200: '#e0F4EE',
        primary500: '#e0F4EE', // Hauptfarbe für Buttons & Links
        primary600: '#ca6785', // Hover-Farbe
        primary700: '#373737', // Dunklere Akzentfarbe
        neutral0: '#FFFFFF',
        neutral100: '#F5F5F5',
        neutral700: '#FFFFFF',
        secondary100: '#ca6785', 
        secondary500: '#ca6785',
        buttonPrimary500: '#888888',
        buttonPrimary600: '#373737',
        buttonPrimary700: '#67CAAC',
      },
    },
  };
  
  const bootstrap = (app) => {
    console.log('Admin Panel geladen:', app);
  };
  
  export default {
    config,
    bootstrap,
  };
  