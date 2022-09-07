import { useState } from "react";
import { createContext, useContext } from "react";

const Authcontext = createContext()
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({})
  const value = { userInfo, setUserInfo }
  return <Authcontext.Provider value={value} {...props}></Authcontext.Provider>
}

function useAuth() {
  const context = useContext(Authcontext)
  if (typeof context === 'undefined')
    throw new Error('useAuth')
  return context
}

export { useAuth, AuthProvider }