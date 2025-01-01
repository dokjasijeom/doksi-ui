import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { doksiTheme } from './styles/theme'
import DoksiGlobalStyle from './styles/DoksiGlobalStyle'

type DoksiThemeProviderProps = {
  children: ReactNode
}

export const DoksiThemeProvider = ({ children }: DoksiThemeProviderProps) => {
  return (
    <ThemeProvider theme={doksiTheme}>
      <DoksiGlobalStyle />
      {children}
    </ThemeProvider>
  )
}
