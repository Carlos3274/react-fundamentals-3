import React, { useContext } from 'react'
import { Container } from './styles'
import { ThemeContext } from '../Contexts/ThemeContext'

export default function Header() {
  const { selectedTheme } = useContext(ThemeContext)
  const { onToggleTheme } = useContext(ThemeContext)
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌙'}
      </button>
    </Container>
  )
}
