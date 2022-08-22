import React from 'react'

import Header from '../Header'
import PostsList from '../PostsList'
import Footer from '../Footer'

import { ThemeContext } from '../Contexts/ThemeContext'

export default function Layout() {
  const { selectedTheme } = useContext(ThemeContext)
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <PostsList />
      <Footer selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
    </>
  )
}
