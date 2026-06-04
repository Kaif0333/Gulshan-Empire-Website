import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface AppContextType {
  isMenuOpen: boolean
  setMenuOpen: (open: boolean) => void
  toggleMenu: () => void
  activeSection: string
  isEnquiryModalOpen: boolean
  setEnquiryModalOpen: (open: boolean) => void
  toggleEnquiryModal: () => void
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isEnquiryModalOpen, setEnquiryModalOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  const toggleEnquiryModal = useCallback(() => {
    setEnquiryModalOpen(prev => !prev)
  }, [])

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setMenuOpen,
        toggleMenu,
        activeSection,
        setActiveSection,
        isEnquiryModalOpen,
        setEnquiryModalOpen,
        toggleEnquiryModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
