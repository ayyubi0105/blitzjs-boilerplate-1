import { ReactNode } from "react"

export interface TabContextValue {
  tabIndex: any
  setTabIndex: any
}

export interface ContextProviderProps {
  children: ReactNode
}
