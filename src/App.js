import { InputField, RefInput, RadioInput } from './components/Forms'
import Login from './components/Login'
import useLocalStorageState from 'use-local-storage-state'

export default function App() {
  const [username, setUsername] = useLocalStorageState('myAppUsername', '')
  const [token, setToken] = useLocalStorageState('myAppToken', '')

  function setAuth(username, token) {
    setUsername(username)
    setToken(token)
  }

  const isLoggedIn = username && token

  return (
    <>
      <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
      <h1>smol forms</h1>
      <InputField />
      <RefInput />
      <RadioInput />
    </>
  )
}
