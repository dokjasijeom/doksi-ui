import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { doksiTheme } from './styles/theme'
import GlobalStyle from './styles/GlobalStyle'

type DoksiThemeProviderProps = {
  children: ReactNode
}

export const DoksiThemeProvider = ({ children }: DoksiThemeProviderProps) => {
  return (
    <ThemeProvider theme={doksiTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
