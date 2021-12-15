import { isElementOfType } from 'react-dom/cjs/react-dom-test-utils.production.min'
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
      {isLoggedIn ? (
        <>
          <h1>Yay you are logged in</h1>
          <button type="button" onClick={() => setAuth(null, null)}>
            Log Out
          </button>
        </>
      ) : (
        <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
      )}
      {/* <h1>smol forms</h1>
      <InputField />
      <RefInput />
      <RadioInput /> */}
    </>
  )
}
