import { createContext, useContext, useState } from "react"
import { TabContextValue, ContextProviderProps } from "./interface"

export const TabContext = createContext({} as TabContextValue)

export const useTabContext = () => useContext(TabContext)

export const TabContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(1)

  const contextValue = { tabIndex, setTabIndex }

  return <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
}
