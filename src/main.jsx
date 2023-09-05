import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider,ColorModeScript,extendTheme } from '@chakra-ui/react'
const colors = {
  brand: {
    900: '#024fc9',
    800: '#146af5',
    700: '#2977f2',
    600: '#337df2',
    500: '#4287f5'
  },
}
const fonts = {
  body: 'Tahoma',
  heading: 'Courier New'
}

const config={
	initialColorMode:"dark",
	systemColorMode:"true"
}

const theme = extendTheme({ colors, fonts ,config})

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={config.initialColorMode}/>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
