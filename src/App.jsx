import { ThemeProvider } from "styled-components"

import Profile from "./components/Profile/Profile";

import theme from "./Theme";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  )
}

export default App
