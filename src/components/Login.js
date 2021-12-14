import { useState } from 'react'
import 'tachyons'
import { requestLogin } from '../ajax'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // axios.post(someUrl).then(data=> setSomeState(data))
    // here is my FAKE REQUEST PLACEHOLDER
    requestLogin(username, password)
      .then((data) => console.log(data))
      .catch((errors) => console.log(errors))
    //make a request to the backend
    console.log('handle submit!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mv2">
        <label className="db mb2" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div className="mv2">
        <label className="db mb2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="mv2">
        <button type="submit">Log In</button>
      </div>
    </form>
  )
}

export default Login
