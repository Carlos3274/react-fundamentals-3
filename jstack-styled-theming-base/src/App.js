import React, { ThemeProvider } from './components/Contexts/ThemeContext'

import GlobalStyle from './styles/global'
import Layout from './components/Layout'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
}

export default App
